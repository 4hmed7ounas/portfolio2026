import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { siteConfig, skills, experience, education, certifications, awards } from "@/data";
import { assets } from "@/data/assets";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my background, skills, and professional experience in software development.",
};

export default function AboutPage() {
  return (
    <><div className="bg-linear-to-b from-accent-light/40 via-background to-background-alt/30">
      {/* ─── Intro Section ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-12 pt-40 min-h-screen flex items-end justify-center">

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
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <AnimatedSection className="lg:col-span-4">
            <div className="relative aspect-video lg:aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-border shadow-card">
              <Image
                src={assets.aboutImage}
                alt={`Portrait of ${siteConfig.name}`}
                width={1500}
                height={1500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-8 pt-12">
              {[
                { label: "Years building", value: "2+" },
                { label: "Projects shipped", value: "10+" },
                { label: "Core product built", value: "1" },
                { label: "Domains explored", value: "3+" },
              ].map((stat, index) => (
                <AnimatedSection
                  key={stat.label}
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground-muted uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection delay={0.15} className="lg:col-span-8">
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
              Who I am
            </h1>
            <div className="mt-5 space-y-4 text-foreground-muted leading-relaxed">
              {siteConfig.aboutDescription
                .split("\n")
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>

      {/* ─── Skills Section ────────────────────────────────────────────── */}
      <section className="bg-background-alt/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
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

      {/* ─── Education, Certs & Awards ─────────────────────────────────── */}
      <section className="bg-linear-to-b from-background-alt/30 to-accent-light/40">
        <div className="mx-auto max-w-7xl px-6 py-12">
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
