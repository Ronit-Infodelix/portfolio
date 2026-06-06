import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/text";
import { buttonVariants } from "@/components/ui/button-variants";
import { SITE_CONFIG } from "@/constants/site";

export function CTA() {
  return (
    <Section className="bg-surface-subtle">
      <Container>
        <div className="max-w-xl">
          <Heading level="h2" as="h2" className="mb-5">
            If you&apos;re building something, I&apos;d like to hear about it.
          </Heading>

          <Text size="lg" color="secondary" className="mb-10">
            I work with founders and teams who need things built — not
            discussed. If that sounds like you, a conversation is a good place
            to start.
          </Text>

          <div className="flex flex-wrap gap-3">
            <a
              href={SITE_CONFIG.cta.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              {SITE_CONFIG.cta.primary.label}
            </a>
            <a
              href={SITE_CONFIG.cta.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {SITE_CONFIG.cta.secondary.label}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
