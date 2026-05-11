import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProfessionalProjectCard from "@/components/ProfessionalProjectCard";
import { projects, professionalProjects } from "@/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects — from full-stack applications to developer tools.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-linear-to-b from-accent-light/40 via-background-alt/30 to-accent-light/40">
      <section className="mx-auto max-w-7xl px-6 py-12 pt-30">


        <SectionHeading
          title="Personal & Featured Projects"
          subtitle="A comprehensive showcase of my work, from concept to deployment"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <SectionHeading
          title="Professional Company Projects"
          subtitle="Key projects I've developed and maintained professionally for companies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalProjects.map((project, index) => (
            <ProfessionalProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
