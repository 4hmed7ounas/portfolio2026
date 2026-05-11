"use client";

import { motion } from "framer-motion";
import { ExternalLink, Briefcase, Building2, CheckCircle2 } from "lucide-react";
import type { ProfessionalProject } from "@/data";

interface ProfessionalProjectCardProps {
  project: ProfessionalProject;
  index?: number;
}

export default function ProfessionalProjectCard({
  project,
  index = 0,
}: ProfessionalProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col h-full rounded-2xl border border-border bg-card-bg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
    >
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />

      {/* Header Info */}
      <div className="flex flex-col gap-4 mb-6 relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-accent font-medium text-sm tracking-wide uppercase">
            <Building2 size={14} />
            {project.company}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-background-alt text-foreground-muted hover:text-accent transition-all duration-200"
              title="Visit Project"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-1 leading-tight group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground-muted">
            <Briefcase size={14} className="text-accent/60" />
            {project.role}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="grow relative z-10">
        <p className="text-foreground-muted leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features / Contributions */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 opacity-80">
              Key Contributions
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                  <CheckCircle2 size={14} className="mt-0.5 text-accent shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tech Stack */}
      <div className="mt-auto pt-6 border-t border-border flex flex-wrap gap-2 relative z-10">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/5 text-accent/80 border border-accent/10 uppercase tracking-tight"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
