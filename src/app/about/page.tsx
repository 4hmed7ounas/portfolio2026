import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { siteConfig, skills, experience, education } from "@/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my background, skills, and professional experience in software development.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Intro Section ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <AnimatedSection className="md:col-span-4">
            <div className="relative aspect-square max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-border shadow-card">
              <Image
                src="/profile.webp"
                alt={`Portrait of ${siteConfig.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection delay={0.15} className="md:col-span-8">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
              About Me
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Hi, I&apos;m {siteConfig.name}
            </h1>
            <div className="mt-5 space-y-4 text-foreground-muted leading-relaxed">
              <p>
                I&apos;m a full-stack software developer based in{" "}
                <span className="text-foreground font-medium">
                  {siteConfig.location}
                </span>{" "}
                with a passion for building web applications that are both{" "}
                <em>beautiful</em> and <em>functional</em>.
              </p>
              <p>
                Over the past 6+ years, I&apos;ve worked with startups and
                established companies to deliver products that users love. I
                specialize in the modern JavaScript ecosystem — React, Next.js,
                Node.js, and TypeScript — but I&apos;m always eager to learn new
                technologies that help me solve problems more effectively.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me hiking the Bay
                Area trails, experimenting with espresso recipes, or contributing
                to open-source projects.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Skills Section ────────────────────────────────────────────── */}
      <section className="bg-background-alt/50 border-y border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="The tools and technologies I work with on a daily basis"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group, groupIndex) => (
              <AnimatedSection
                key={group.category}
                delay={groupIndex * 0.1}
                className="p-6 rounded-xl bg-card-bg border border-border"
              >
                <h3 className="font-semibold text-foreground text-base mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience Section ────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in software development"
        />

        <div className="max-w-3xl mx-auto space-y-0">
          {experience.map((exp, index) => (
            <AnimatedSection
              key={exp.company}
              delay={index * 0.1}
              className="relative pl-10 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-[17px] top-10 bottom-0 w-px bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-[35px] h-[35px] rounded-full bg-accent-light border-2 border-accent flex items-center justify-center">
                <Briefcase size={14} className="text-accent" />
              </div>

              <div>
                <span className="text-xs font-medium text-accent tracking-wide uppercase">
                  {exp.period}
                </span>
                <h3 className="mt-1 font-semibold text-foreground text-lg">
                  {exp.role}
                </h3>
                <p className="text-sm text-foreground-muted font-medium">
                  {exp.company}
                </p>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── Education Section ─────────────────────────────────────────── */}
      <section className="bg-background-alt/50 border-y border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="Education" />

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <AnimatedSection
                key={edu.institution}
                delay={index * 0.1}
                className="flex items-start gap-4 p-6 rounded-xl bg-card-bg border border-border"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                  <GraduationCap size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-sm text-foreground-muted">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-foreground-muted mt-1">
                    {edu.period}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
