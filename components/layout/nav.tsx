import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button-variants";
import { SITE_CONFIG } from "@/constants/site";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-canvas border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <a
            href="/"
            className="font-sans font-semibold text-sm text-ink hover:text-ink-secondary transition-colors duration-150"
          >
            Ronit
          </a>

          {/* Nav links — desktop only */}
          <nav aria-label="Site navigation" className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ink-secondary hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <a
            href={SITE_CONFIG.cta.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            {SITE_CONFIG.cta.primary.label}
          </a>

        </div>
      </Container>
    </header>
  );
}
