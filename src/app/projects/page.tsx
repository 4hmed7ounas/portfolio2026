import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects — from full-stack applications to developer tools.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        title="All Projects"
        subtitle="A comprehensive showcase of my work, from concept to deployment"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
