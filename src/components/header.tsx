"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#work" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-2xl px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 text-sm font-medium tracking-tight text-foreground"
          >
            NJ
          </Link>

          <nav className="hidden items-center gap-5 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground sm:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border/60 py-3 sm:hidden">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2.5 text-sm text-muted transition-colors hover:bg-border/40 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
