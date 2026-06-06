import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";

// ─── Replace these entries with your real projects ───────────────────────────
// Fields:
//   name:         The product name
//   summary:      One line — what it is, plainly
//   problem:      The pain or gap that existed before this was built
//   solution:     What you built to address it
//   outcome:      What became possible — no invented metrics needed
//   technologies: Flat list of tools used (keep it to the relevant ones)
//   link:         Optional — live URL, case study, or App Store link
//                 Set to undefined to omit
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    name: "Project Name",
    summary:
      "Replace with one line describing what this product is and who it's for.",
    problem:
      "Replace with one sentence describing the pain or gap that existed before this product was built.",
    solution:
      "Replace with one sentence describing what you built and how it addresses the problem.",
    outcome:
      "Replace with one sentence describing what changed — what users or the business could now do.",
    technologies: ["Replace", "with", "your", "stack"],
    link: undefined,
  },
  {
    name: "Project Name",
    summary:
      "Replace with one line describing what this product is and who it's for.",
    problem:
      "Replace with one sentence describing the pain or gap that existed before this product was built.",
    solution:
      "Replace with one sentence describing what you built and how it addresses the problem.",
    outcome:
      "Replace with one sentence describing what changed — what users or the business could now do.",
    technologies: ["Replace", "with", "your", "stack"],
    link: undefined,
  },
  {
    name: "Project Name",
    summary:
      "Replace with one line describing what this product is and who it's for.",
    problem:
      "Replace with one sentence describing the pain or gap that existed before this product was built.",
    solution:
      "Replace with one sentence describing what you built and how it addresses the problem.",
    outcome:
      "Replace with one sentence describing what changed — what users or the business could now do.",
    technologies: ["Replace", "with", "your", "stack"],
    link: "https://example.com", // Replace with real URL or set to undefined
  },
] satisfies ReadonlyArray<{
  name: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  link: string | undefined;
}>;

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Badge className="mb-8">Projects</Badge>

        <Heading level="h2" as="h2" className="max-w-xl mb-4">
          Selected work.
        </Heading>

        <Text color="secondary" className="max-w-2xl mb-16">
          Products I&apos;ve owned from concept to launch — and stayed involved
          with after.
        </Text>

        <div className="border-t border-border">
          {projects.map((project, i) => (
            <article key={i} className="py-12 sm:py-14 border-b border-border">

              {/* Header: name + summary */}
              <Heading level="h3" as="h3" className="mb-2">
                {project.name}
              </Heading>
              <Text size="lg" color="secondary" className="mb-8 max-w-2xl">
                {project.summary}
              </Text>

              {/* Narrative: Problem / Solution / Outcome */}
              <dl className="space-y-3 mb-8">
                <div className="flex gap-5">
                  <dt className="font-mono text-xs text-ink-muted w-20 shrink-0 pt-0.75">
                    Problem
                  </dt>
                  <dd className="flex-1">
                    <Text color="secondary" as="span">
                      {project.problem}
                    </Text>
                  </dd>
                </div>
                <div className="flex gap-5">
                  <dt className="font-mono text-xs text-ink-muted w-20 shrink-0 pt-0.75">
                    Solution
                  </dt>
                  <dd className="flex-1">
                    <Text color="secondary" as="span">
                      {project.solution}
                    </Text>
                  </dd>
                </div>
                <div className="flex gap-5">
                  <dt className="font-mono text-xs text-ink-muted w-20 shrink-0 pt-0.75">
                    Outcome
                  </dt>
                  <dd className="flex-1">
                    <Text color="secondary" as="span">
                      {project.outcome}
                    </Text>
                  </dd>
                </div>
              </dl>

              {/* Footer: tags + optional link */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors duration-150"
                  >
                    View project
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
