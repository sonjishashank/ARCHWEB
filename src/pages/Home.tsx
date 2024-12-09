import { Hero } from "@/components/sections/Hero";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function Home() {
  return (
    <main>
      <Hero />
      <ProjectsPreview />
      <ServicesPreview />
      <ContactCTA />
    </main>
  );
}