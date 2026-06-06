import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";

// ─── Replace these capabilities with your real skill clusters ─────────────────
// Fields:
//   name:         The capability area (not a tool name)
//   description:  One sentence — what this capability enables you to deliver
//   technologies: List of tools, frameworks, or practices within this area
//                 Keep it to the ones you actually use, not everything you've touched
// ─────────────────────────────────────────────────────────────────────────────
const capabilities = [
  {
    name: "Product Engineering",
    description:
      "Replace with one sentence describing what you can build end-to-end — the scope and type of product you're capable of owning.",
    technologies: ["Replace", "with", "your", "tools"],
  },
  {
    name: "Frontend Systems",
    description:
      "Replace with one sentence describing what you deliver on the UI side — interfaces, performance, design systems, etc.",
    technologies: ["Replace", "with", "your", "tools"],
  },
  {
    name: "Backend & APIs",
    description:
      "Replace with one sentence describing what you can build server-side — APIs, services, data layers, infrastructure.",
    technologies: ["Replace", "with", "your", "tools"],
  },
  {
    name: "Product Thinking",
    description:
      "Replace with one sentence describing how you approach product decisions — research, prioritization, user feedback, iteration.",
    technologies: ["Replace", "with", "your", "tools"],
  },
  {
    name: "Growth & Experimentation",
    description:
      "Replace with one sentence describing how you think about traction — analytics, testing, optimization, distribution.",
    technologies: ["Replace", "with", "your", "tools"],
  },
] satisfies ReadonlyArray<{
  name: string;
  description: string;
  technologies: string[];
}>;

export function Skills() {
  return (
    <Section id="skills" className="bg-surface-subtle">
      <Container>
        <Badge className="mb-8">Capabilities</Badge>

        <Heading level="h2" as="h2" className="max-w-xl mb-4">
          What I build with.
        </Heading>

        <Text color="secondary" className="max-w-2xl mb-16">
          Organized by what I can deliver — not by how many tools I&apos;ve
          touched.
        </Text>

        <div className="border-t border-border">
          {capabilities.map((capability, i) => (
            <div key={i} className="py-8 border-b border-border">
              <div className="flex flex-col md:flex-row md:gap-12">

                {/* Left: name + description */}
                <div className="md:w-56 lg:w-64 shrink-0 mb-5 md:mb-0">
                  <Heading level="h4" as="h3" className="mb-2">
                    {capability.name}
                  </Heading>
                  <Text size="sm" color="secondary">
                    {capability.description}
                  </Text>
                </div>

                {/* Right: technology tags */}
                <div className="flex flex-wrap gap-2 content-start">
                  {capability.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
