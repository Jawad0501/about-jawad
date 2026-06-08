import { Resend } from "resend";
import { newsletterTopics, type NewsletterTopicId } from "@/data/newsletter";

const topicIds = new Set(newsletterTopics.map((topic) => topic.id));

type SubscribePayload = {
  name?: string;
  email?: string;
  interests?: string[];
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: SubscribePayload;

  try {
    body = (await request.json()) as SubscribePayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.website) {
    return Response.json({ ok: true });
  }

  const name = body.name?.trim().slice(0, 100) ?? "";
  const email = body.email?.trim().slice(0, 254) ?? "";
  const interests = (body.interests ?? []).filter((id): id is NewsletterTopicId =>
    topicIds.has(id as NewsletterTopicId),
  );

  if (!email || !isValidEmail(email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 });
  }

  if (interests.length === 0) {
    return Response.json(
      { error: "Pick at least one topic to subscribe to." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail =
    process.env.NEWSLETTER_TO_EMAIL ?? "anmjawad007@gmail.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    return Response.json(
      { error: "Newsletter is temporarily unavailable. Try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const selectedLabels = newsletterTopics
    .filter((topic) => interests.includes(topic.id))
    .map((topic) => `- ${topic.label}: ${topic.description}`)
    .join("\n");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `New subscriber: ${email}`,
    text: [
      "New newsletter subscriber",
      "",
      `Name: ${name || "(not provided)"}`,
      `Email: ${email}`,
      "",
      "Wants updates on:",
      selectedLabels,
      "",
      `Submitted: ${new Date().toISOString()}`,
    ].join("\n"),
  });

  if (error) {
    return Response.json(
      { error: "Could not send subscription email. Try again later." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
