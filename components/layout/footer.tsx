import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/constants/site";

const links = [
  { label: "GitHub",   href: SITE_CONFIG.social.github        },
  { label: "LinkedIn", href: SITE_CONFIG.social.linkedin       },
  { label: "Email",    href: SITE_CONFIG.cta.tertiary.href     },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Identity */}
          <p className="text-sm text-ink-muted">
            <span className="font-semibold text-ink">{SITE_CONFIG.name}</span>
            {" — "}Building real products, end to end.
          </p>

          {/* Links */}
          <nav aria-label="Social links" className="flex items-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>
      </Container>
    </footer>
  );
}
