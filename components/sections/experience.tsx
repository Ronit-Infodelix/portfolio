import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";

// ─── Replace these entries with your real work ───────────────────────────────
// Fields:
//   category:  "Freelance" | "Product" | "Startup" | "Project"
//   name:      The product or company name
//   role:      Your role (e.g. "Founder & Engineer", "Lead Engineer")
//   period:    Year or range (e.g. "2024", "2023 – 2024", "Ongoing")
//   challenge: One sentence — the problem that existed before you started
//   built:     One sentence — what you engineered to address it
//   outcome:   One sentence — what became possible that wasn't before (no metrics needed)
//              Set to undefined to omit the field entirely
// ─────────────────────────────────────────────────────────────────────────────
const work = [
  {
    category: "Product",
    name: "Product Name",
    role: "Founder & Engineer",
    period: "Ongoing",
    challenge:
      "Replace with one sentence describing the problem that existed — what wasn't working, what was missing, or what people couldn't do.",
    built:
      "Replace with one sentence describing what you engineered to address it.",
    outcome:
      "Replace with what became possible — what users could now do that they couldn't before.",
  },
  {
    category: "Freelance",
    name: "Client Project Name",
    role: "Product Engineer",
    period: "2024",
    challenge:
      "Replace with the client's problem — what was broken, slow, manual, or absent before you started.",
    built:
      "Replace with one sentence describing what you built to solve it.",
    outcome:
      "Replace with what changed for the client or their users after you shipped.",
  },
  {
    category: "Startup",
    name: "Startup Name",
    role: "Lead Engineer",
    period: "2022 – 2023",
    challenge:
      "Replace with the technical or product challenge the team was facing.",
    built:
      "Replace with what you shipped and what problem it directly addressed.",
    outcome: undefined, // remove or fill in when you have something real to say
  },
] as const satisfies ReadonlyArray<{
  category: "Freelance" | "Product" | "Startup" | "Project";
  name: string;
  role: string;
  period: string;
  challenge: string;
  built: string;
  outcome?: string;
}>;

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Badge className="mb-8">Work</Badge>

        <Heading level="h2" as="h2" className="max-w-xl mb-4">
          Things I&apos;ve built.
        </Heading>

        <Text color="secondary" className="max-w-2xl mb-16">
          A selection of products, client work, and projects — ordered by what
          I&apos;m most proud of, not by when it happened.
        </Text>

        <div className="border-t border-border">
          {work.map((entry, i) => (
            <article key={i} className="py-8 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:gap-10">

                {/* Period */}
                <span className="font-mono text-xs text-ink-muted mb-3 sm:mb-0 sm:w-20 sm:shrink-0 sm:pt-0.5">
                  {entry.period}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3">
                    <Badge variant="default" size="sm">
                      {entry.category}
                    </Badge>
                  </div>

                  <Heading level="h4" as="h3" className="mb-1.5">
                    {entry.name}
                  </Heading>

                  <Text size="sm" color="muted" className="mb-5">
                    {entry.role}
                  </Text>

                  {/* Challenge / Built / Outcome */}
                  <dl className="space-y-2">
                    <div className="flex gap-5">
                      <dt className="font-mono text-xs text-ink-muted w-20 shrink-0 pt-0.75">
                        Challenge
                      </dt>
                      <dd className="flex-1">
                        <Text size="sm" color="secondary" as="span">
                          {entry.challenge}
                        </Text>
                      </dd>
                    </div>
                    <div className="flex gap-5">
                      <dt className="font-mono text-xs text-ink-muted w-20 shrink-0 pt-0.75">
                        Built
                      </dt>
                      <dd className="flex-1">
                        <Text size="sm" color="secondary" as="span">
                          {entry.built}
                        </Text>
                      </dd>
                    </div>
                    {entry.outcome && (
                      <div className="flex gap-5">
                        <dt className="font-mono text-xs text-ink-muted w-20 shrink-0 pt-0.75">
                          Outcome
                        </dt>
                        <dd className="flex-1">
                          <Text size="sm" color="secondary" as="span">
                            {entry.outcome}
                          </Text>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
