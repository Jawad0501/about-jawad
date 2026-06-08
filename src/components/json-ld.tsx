import { profile } from "@/data/profile";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.name,
    jobTitle: "Software Engineer",
    description: profile.tagline,
    worksFor: {
      "@type": "Organization",
      name: "AuthLab",
      url: "https://authlab.io",
    },
    url: "https://about-jawad.vercel.app",
    sameAs: [
      profile.links.github,
      profile.links.linkedin,
      profile.links.medium,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sylhet",
      addressCountry: "Bangladesh",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
