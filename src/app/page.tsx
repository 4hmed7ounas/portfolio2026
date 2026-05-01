import { Code2, Palette, Zap, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { siteConfig, highlights, featuredProjects } from "@/data";
import { ArrowRight } from "lucide-react";

const iconMap = {
  Code2,
  Palette,
  Zap,
  Layers,
};

export default function Home() {
  return (
    <>
      {/* ─── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-end">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-accent-light/40 via-background to-background-alt/30 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute top-20 mx-auto px-6 xl:px-12 w-full">
          <AnimatedSection className="flex justify-between w-full">
            <p className="text-base font-serif text-accent font-medium tracking-wide">

            </p>
            <p className="text-sm text-foreground/50 tracking-tight text-right">
              {siteConfig.location}<br />
              {siteConfig.email}
            </p>
          </AnimatedSection>
        </div>

        <div className="relative mx-auto py-12 max-w-7xl xl:min-w-7xl px-6">
          <AnimatedSection>
            <p className="text-6xl md:text-8xl font-serif text-accent font-medium tracking-wide mb-6">
              {siteConfig.role}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground tracking-tight mb-4">
              {siteConfig.name}
            </h1>
            <hr />
            <div className="mt-8 flex flex-col xl:flex-row justify-between gap-4">
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl">
                {siteConfig.heroDescription}
              </p>
              <div className="flex gap-4">
                <Button href="/projects" variant="primary">
                  View Projects
                  <ArrowRight size={16} />
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Me
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Highlights Section ────────────────────────────────────────── */}
      <section className="bg-background-alt/50 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeading
            title="What I Do"
            subtitle="Focused on delivering exceptional results across every layer of the stack"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <AnimatedSection
                  key={item.title}
                  delay={index * 0.1}
                  className="p-6 rounded-xl bg-card-bg border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects Section ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work that I'm most proud of"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline">
            View All Projects
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────────────────────── */}
      <AnimatedSection className="bg-background-alt/50 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-foreground-muted text-lg max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how I can help bring your ideas to life.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Get in Touch
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
