import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/text";
import { buttonVariants } from "@/components/ui/button-variants";
import { SITE_CONFIG } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32">
      <Container>
        <div className="lg:grid lg:grid-cols-[1fr_400px] lg:gap-20 xl:gap-24 lg:items-center">

          {/* ── Text block ── */}
          <div className="motion-safe:animate-slide-up">

            {/* Availability badge + mobile avatar */}
            <div className="flex items-center justify-between mb-8 sm:justify-start sm:gap-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-surface text-sm text-ink-secondary">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new projects
              </div>

              {/* Small circular avatar — mobile only */}
              {/* Replace this div with <Image> once you have public/photo.jpg */}
              <div
                className="lg:hidden relative w-12 h-12 rounded-full overflow-hidden bg-surface-subtle border-2 border-border shrink-0"
                aria-hidden="true"
              />
            </div>

            {/* Headline */}
            <Heading level="display" as="h1" className="mb-6">
              I build the product,
              <br />
              <em className="text-ink-secondary">not just the feature.</em>
            </Heading>

            {/* Supporting statement */}
            <Text size="lg" color="secondary" className="max-w-130 mb-10">
              Product engineering for founders who need something real built.
              Full stack, from architecture to deployment — and I stay involved
              after it ships.
            </Text>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
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

            {/* Credibility */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-ink-muted">
              <span>Full-stack</span>
              <span className="w-1 h-1 rounded-full bg-border-strong" aria-hidden="true" />
              <span>Design to deployment</span>
              <span className="w-1 h-1 rounded-full bg-border-strong" aria-hidden="true" />
              <span>In it for the outcome</span>
            </div>
          </div>

          {/* ── Photo — desktop only ── */}
          <div className="hidden lg:block">
            {/*
              Add your photo: public/photo.jpg
              Then replace the placeholder div below with:

              <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
                <Image
                  src="/photo.jpg"
                  alt="Ronit Singh"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            */}
            <div
              className="relative aspect-4/5 w-full rounded-2xl bg-surface-subtle shadow-xl ring-1 ring-border"
              aria-hidden="true"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
