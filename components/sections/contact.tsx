import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/constants/site";

const primaryContacts = [
  {
    label: "WhatsApp",
    description: "Quick questions, ideas, or anything you'd send a text about.",
    href: SITE_CONFIG.cta.secondary.href,
  },
  {
    label: "Email",
    description: "Longer briefs, detailed questions, or async conversations.",
    href: SITE_CONFIG.cta.tertiary.href,
  },
] satisfies ReadonlyArray<{ label: string; description: string; href: string }>;

const socialLinks = [
  { label: "LinkedIn", href: SITE_CONFIG.social.linkedin },
  { label: "GitHub",   href: SITE_CONFIG.social.github   },
] satisfies ReadonlyArray<{ label: string; href: string }>;

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Badge className="mb-8">Contact</Badge>

        <Heading level="h2" as="h2" className="max-w-xl mb-16">
          Reach me directly.
        </Heading>

        <div className="border-t border-border max-w-xl">
          {primaryContacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between py-7 border-b border-border hover:text-accent transition-colors duration-150"
            >
              <div>
                <span className="block font-sans font-semibold text-base text-ink group-hover:text-accent transition-colors duration-150 mb-1.5">
                  {contact.label}
                </span>
                <Text size="sm" color="secondary" as="span" className="block">
                  {contact.description}
                </Text>
              </div>
              <span
                className="ml-6 mt-0.5 text-ink-muted group-hover:text-accent transition-colors duration-150"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          ))}
        </div>

        <div className="flex gap-5 mt-10">
          {socialLinks.map((link) => (
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
        </div>
      </Container>
    </Section>
  );
}
