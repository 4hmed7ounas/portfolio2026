// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "FaGithub" | "FaLinkedin" | "FaTwitter" | "Mail";
}

// ─── Site Info ────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Alex Morgan",
  role: "Software Developer",
  email: "alex@alexmorgan.dev",
  location: "San Francisco, CA",
  bio: "I craft elegant, performant web applications with modern technologies. Passionate about clean code, intuitive design, and building products that make a difference.",
  heroTagline: "Building digital experiences that matter.",
  heroDescription:
    "Full-stack developer specializing in React, Next.js, and Node.js. I turn complex problems into *simple*, *beautiful*, and *intuitive* solutions.",
};

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "FaGithub" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "FaLinkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
  { name: "Email", url: "mailto:alex@alexmorgan.dev", icon: "Mail" },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// ─── Highlights ───────────────────────────────────────────────────────────────

export const highlights = [
  {
    icon: "Code2" as const,
    title: "Clean Code",
    description:
      "Writing maintainable, well-documented code following industry best practices and design patterns.",
  },
  {
    icon: "Palette" as const,
    title: "UI / UX Design",
    description:
      "Creating intuitive and visually appealing interfaces that delight users and drive engagement.",
  },
  {
    icon: "Zap" as const,
    title: "Performance",
    description:
      "Optimizing applications for speed with lazy loading, code splitting, and efficient rendering strategies.",
  },
  {
    icon: "Layers" as const,
    title: "Full Stack",
    description:
      "End-to-end development from database design and APIs to pixel-perfect frontends and deployment.",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Momentum — Task Management",
    description:
      "A real-time collaborative task management platform with drag-and-drop boards, team workspaces, and automated workflow triggers.",
    image: "/projects/project-1.webp",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Pulse — Analytics Dashboard",
    description:
      "An interactive analytics dashboard with real-time data visualization, custom report generation, and AI-powered insights.",
    image: "/projects/project-2.webp",
    tags: ["React", "D3.js", "Node.js", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Horizon — E-Commerce Platform",
    description:
      "A modern e-commerce platform featuring headless CMS integration, Stripe payments, inventory management, and personalized recommendations.",
    image: "/projects/project-3.webp",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Tailwind CSS", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Clarity — Note-Taking App",
    description:
      "A minimal, distraction-free writing app with markdown support, nested notebooks, full-text search, and cloud sync.",
    image: "/projects/project-4.webp",
    tags: ["React", "Electron", "SQLite", "Markdown", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "Atlas — Travel Planner",
    description:
      "An AI-powered travel planning tool that generates personalized itineraries, booking suggestions, and budget estimates.",
    image: "/projects/project-5.webp",
    tags: ["Next.js", "OpenAI API", "Maps API", "Supabase", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Forge — Developer CLI Toolkit",
    description:
      "A collection of developer productivity tools: scaffolding generators, code formatters, Git workflow helpers, and deployment scripts.",
    image: "/projects/project-6.webp",
    tags: ["Node.js", "TypeScript", "Commander.js", "Inquirer", "Shell"],
    github: "https://github.com",
  },
];

export const featuredProjects = projects.slice(0, 3);

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML / CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Vercel", "CI / CD", "Figma"],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "TechWave Inc.",
    period: "2023 — Present",
    description:
      "Leading the frontend architecture for a SaaS platform serving 50k+ users. Migrated legacy codebase to Next.js App Router, improving page load times by 40%.",
  },
  {
    role: "Full Stack Developer",
    company: "DigitalCraft Studio",
    period: "2021 — 2023",
    description:
      "Built and shipped 12+ client projects ranging from e-commerce platforms to real-time collaboration tools. Led a team of 4 developers.",
  },
  {
    role: "Frontend Developer",
    company: "StartupLab",
    period: "2019 — 2021",
    description:
      "Developed responsive web applications using React and TypeScript. Implemented design systems and component libraries used across multiple products.",
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = [
  {
    degree: "B.S. Computer Science",
    institution: "University of California, Berkeley",
    period: "2015 — 2019",
  },
];
