import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig, socialLinks } from "@/data";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialIconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  Mail,
};

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your project, collaboration, or just say hello.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* ─── Contact Info ─────────────────────────────────────────── */}
        <AnimatedSection className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-foreground-muted hover:text-accent transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Location
                  </p>
                  <p className="text-sm text-foreground-muted">
                    {siteConfig.location}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Availability
                  </p>
                  <p className="text-sm text-foreground-muted">
                    Open to freelance &amp; full-time opportunities
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">
              Follow Me
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* ─── Contact Form ────────────────────────────────────────── */}
        <AnimatedSection
          delay={0.15}
          className="lg:col-span-3 p-6 md:p-8 rounded-xl bg-card-bg border border-border shadow-card"
        >
          <h3 className="font-semibold text-foreground text-lg mb-6">
            Send a Message
          </h3>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
