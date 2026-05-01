import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { siteConfig, skills, experience, education, certifications, awards } from "@/data";

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
                I&apos;m a passionate developer and problem solver based in{" "}
                <span className="text-foreground font-medium">
                  {siteConfig.location}
                </span>{" "}
                with a strong focus on AI, DevOps, and full-stack development.
              </p>
              <p>
                I love building intelligent, reliable systems — from FastAPI backends integrated with Stripe billing and MongoDB Atlas, to Next.js web apps enhanced with APIs like Spotify and Twilio. My recent work blends machine learning, LLMs, and cloud automation, where I&apos;ve explored areas like speech recognition, voice bots, and AI-powered agents.
              </p>
              <p>
                Beyond code, I&apos;m deeply interested in robotics (ROS2), CI/CD pipelines, and building production-ready systems that scale. My goal is to craft products that are not only technically solid but also deliver real impact through intelligent automation and clean design.
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
              key={exp.company + exp.role}
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

      {/* ─── Education, Certs & Awards ─────────────────────────────────── */}
      <section className="bg-background-alt/50 border-y border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Education */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Education
              </h2>
              <div className="space-y-6">
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
                      <h3 className="font-semibold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-foreground-muted">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-foreground-muted mt-1">
                        {edu.period}
                      </p>
                      {edu.details && (
                        <p className="text-xs text-foreground-muted mt-2 leading-relaxed">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Right Column: Certifications & Awards */}
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                  Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <AnimatedSection
                      key={cert.title}
                      delay={index * 0.05}
                      className="flex items-center gap-3 p-4 rounded-lg bg-card-bg border border-border"
                    >
                      <span className="text-xl">{cert.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {cert.title}
                      </span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                  Honors & Awards
                </h2>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <AnimatedSection
                      key={award.title}
                      delay={index * 0.05}
                      className="flex items-start gap-3 p-4 rounded-lg bg-card-bg border border-border"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                        <span className="text-xs">🏆</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {award.title}
                      </span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
