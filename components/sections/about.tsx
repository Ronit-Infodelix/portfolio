import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";

const beliefs = [
  {
    index: "01",
    heading: "Ship before you're comfortable.",
    body: "Perfect plans die in meetings. I bias toward building something real, then improving it — not toward achieving consensus before writing a line of code.",
  },
  {
    index: "02",
    heading: "Users correct assumptions.",
    body: "No spec survives first contact with real users. I ship early, watch closely, and let actual usage reshape the product — not internal guesses.",
  },
  {
    index: "03",
    heading: "Shipping is how you learn.",
    body: "A product in production reveals what prototypes never will. Momentum matters more than elegance — especially at the stage when most things are still unknown.",
  },
] as const;

export function About() {
  return (
    <Section id="about" className="bg-surface-subtle">
      <Container>
        <Badge className="mb-8">How I build</Badge>

        <Heading level="h2" as="h2" className="max-w-xl mb-4">
          Building is the easy part.
        </Heading>

        <Text color="secondary" className="max-w-2xl mb-16">
          The hard part is knowing what to build, when to ship it, and how to
          improve it once real users arrive.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {beliefs.map((belief) => (
            <div key={belief.index}>
              <span className="font-mono text-sm text-ink-muted mb-4 block">
                {belief.index}
              </span>
              <Heading level="h4" as="h3" className="mb-3">
                {belief.heading}
              </Heading>
              <Text color="secondary">{belief.body}</Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
