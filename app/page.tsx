import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CTA />
      <Contact />
    </main>
  );
}
