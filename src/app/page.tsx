import { Code2, Palette, Zap, Layers, ArrowRight, Briefcase, GraduationCap, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import SkillBadge from "@/components/SkillBadge";
import GitHubCalendar from "@/components/GitHubCalendar";
import { siteConfig, highlights, featuredProjects, skills, experience, education } from "@/data";
import Link from "next/link";

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
        <div className="absolute inset-0 bg-linear-to-b from-accent-light/50 via-background to-background-alt/30 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute top-20 mx-auto px-6 xl:px-12 w-full">
          <AnimatedSection className="flex justify-between w-full">
            <p className="text-base font-serif text-accent font-medium tracking-wide">
              {/* Optional: Add something here if needed */}
            </p>
            <p className="text-sm text-foreground/50 tracking-tight text-right">
              {siteConfig.location}<br />
              <Link href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                {siteConfig.email}
              </Link>
            </p>
          </AnimatedSection>
        </div>

        <div className="relative mx-auto py-12 max-w-7xl xl:min-w-7xl px-6">
          <AnimatedSection>
            <p className="text-5xl md:text-7xl font-serif text-accent font-medium tracking-wide mb-6">
              {siteConfig.role}
            </p>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground tracking-tight mb-4 leading-none">
              {siteConfig.name}
            </h1>
            <div className="w-full h-px bg-border/50 my-8" />
            <div className="flex flex-col xl:flex-row justify-between gap-8 items-start xl:items-center">
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl">
                {siteConfig.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/projects" variant="primary">
                  View Projects
                  <ArrowRight size={16} />
                </Button>
                <Button href="/contact" variant="outline">
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── About Section (Stack, Tools, Education) ──────────────────── */}
      <section id="about" className="py-12 bg-background-alt/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="About & Expertise"
            subtitle="My technical foundation and academic background"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Bio */}
            <div className="lg:col-span-7 space-y-8">
              <AnimatedSection>
                <div className="space-y-6 text-foreground/80 leading-relaxed font-medium whitespace-pre-wrap">
                  {siteConfig.bio}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Stack & Tools + Education */}
            <div className="lg:col-span-5 space-y-12">
              {/* Stack & Tools */}
              <div>
                <h3 className="text-xs font-bold text-foreground-muted/60 uppercase tracking-[0.2em] mb-6">
                  STACK & TOOLS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.flatMap(s => s.items.slice(0, 4)).map((skill, index) => (
                    <AnimatedSection
                      key={`${skill}-${index}`}
                      delay={index * 0.01}
                      className="px-3 py-1.5 border border-border/60 text-sm font-medium text-foreground/70 rounded-xs bg-transparent"
                    >
                      {skill}
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="pt-8 border-t border-border/40">
                <h3 className="text-xs font-bold text-foreground-muted/60 uppercase tracking-[0.2em] mb-6">
                  EDUCATION
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <AnimatedSection key={edu.institution} delay={index * 0.1}>
                      <h4 className="font-bold text-foreground text-lg tracking-tight leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-foreground-muted/80 font-medium">
                        {edu.institution}, {edu.period}
                      </p>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Experience Section ────────────────────────────────────────── */}
      <section id="experience" className="py-12 bg-background-alt/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Experience"
            subtitle="My professional journey and achievements"
          />

          <div className="mt-12 border-t border-border/40">
            {experience.map((exp, index) => (
              <AnimatedSection
                key={exp.company + exp.role}
                delay={index * 0.1}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-border/40 group"
              >
                {/* Period - Left Column */}
                <div className="md:col-span-3">
                  <span className="text-sm font-medium text-foreground-muted/60 tracking-tight">
                    {exp.period}
                  </span>
                </div>

                {/* Content - Right Column */}
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                    <h3 className="font-bold text-foreground text-xl tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="text-foreground-muted/80 font-medium">
                      {exp.role}
                    </span>
                  </div>
                  <p className="text-foreground-muted leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Selected Work Section ───────────────────────────────────── */}
      <section id="work" className="py-12 bg-background-alt/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Selected Work"
            subtitle="A selection of projects that showcase my skills and passion"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/projects" variant="outline" className="px-8">
              View All Projects
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── GitHub Contribution Section ──────────────────────────────── */}
      <section className="py-12 bg-linear-to-b from-background-alt/30 to-accent-light/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="GitHub Activity"
            subtitle="My open source contributions and coding consistency"
          />
          <div className="max-w-5xl mx-auto">
            <GitHubCalendar username="4hmed7ounas" />
            <div className="mt-8 text-center">
              <p className="text-foreground-muted text-sm italic">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ───────────────────────────────────────────────── */}
      <section className="py-12 bg-linear-to-b from-accent-light/60 to-accent-light/40">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Ready to build something amazing?
            </h2>
            <p className="mt-4 text-foreground-muted text-xl max-w-2xl mx-auto mb-10">
              I&apos;m currently available for new projects and collaborations.
              Let&apos;s discuss how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" className="px-10 h-14 text-lg">
                Get in Touch
                <Mail size={20} />
              </Button>
              <Button href="mailto:ahmedyounas007@outlook.com" variant="outline" className="px-10 h-14 text-lg">
                Send an Email
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

