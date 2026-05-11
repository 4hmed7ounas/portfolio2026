// ─── Types ────────────────────────────────────────────────────────────────────

import { assets } from "./assets";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

export interface ProfessionalProject {
  title: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
  features?: string[];
  link?: string;
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
  icon:
    | "FaGithub"
    | "FaLinkedin"
    | "FaTwitter"
    | "Mail"
    | "FaInstagram"
    | "FaFacebook"
    | "FaUpwork";
}

export interface Certification {
  title: string;
  icon: string;
}

export interface Award {
  title: string;
  description?: string;
}

// ─── Site Info ────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Ahmed Younas",
  role: "AI Systems Engineer & Full Stack Developer",
  email: "ahmedyounas007@outlook.com",
  location: "Lahore, Pakistan",
  bio: "Motivated and detail-oriented AI Systems Engineer and Full-Stack Developer with hands-on experience in building production-grade applications using Python, FastAPI, Node.js, Next.js, and React. Strong background in designing backend systems, integrating external services, and developing complete end-to-end products with clean, maintainable architecture.\n\nI specialise in developing API-driven platforms, automation workflows, and real-time systems, along with crafting fast, responsive, and user-focused web interfaces. My work includes building structured backend services, handling data pipelines, integrating third-party APIs such as Stripe and Google services, and creating systems that are reliable, scalable, and easy to extend.\n\nI have developed and deployed applications from concept to production, including systems with voice-based interactions, automated scheduling, and multi-tenant architectures. I focus on writing efficient code, optimising performance, and ensuring smooth communication between frontend and backend systems. Passionate about solving practical problems, I continuously work on improving system design, scalability, and modern development practices.",
  heroTagline: "I Develop Digital Products That Drive Growth & Revenue.",
  aboutDescription:
    "I'm Ahmed Younas, an AI Systems Engineer and Full-Stack Developer based in Lahore, Pakistan. I build scalable backend systems, AI-driven applications, and modern web platforms that solve real business problems and operate reliably in production.\n\nMy journey started with frontend and mobile development at GrootCore Systems, where I worked on responsive web applications and cross-platform mobile interfaces. Over time, I transitioned deeper into backend engineering and system design, focusing on building API-driven platforms, automation systems, and real-time applications.\n\nCurrently, I work as a Founding Software Engineer at Supportiyo, where I design and develop backend systems powering voice-based interactions, automation workflows, and multi-tenant platforms. My work involves integrating external services, handling real-time communication, and deploying scalable infrastructure that supports production workloads.\n\nAlongside web systems, I've also worked on robotics and computer vision projects, combining hardware, software, and intelligent control systems into unified platforms. This experience has shaped how I approach system design, thinking beyond just code and focusing on complete, functional systems.\n\nI'm particularly interested in building efficient software that reduces manual effort, improves workflows, and delivers measurable impact. Whether it's an automated booking system, a content generation pipeline, or a real-time service platform, I focus on building solutions that are practical, scalable, and reliable.",
  heroDescription:
    "A passionate developer and problem solver with a strong focus on AI, Robotics, Automations, DevOps, and full-stack development.",
};

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/4hmed7ounas", icon: "FaGithub" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmed-younas-360b481a5",
    icon: "FaLinkedin",
  },
  // { name: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
  { name: "Email", url: "mailto:ahmedyounas007@outlook.com", icon: "Mail" },
  {
    name: "Instagram",
    url: "https://www.instagram.com/4hmed7ounas/",
    icon: "FaInstagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/4hmed7ounass",
    icon: "FaFacebook",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01d3d4b667f04e2f64?mp_source=share",
    icon: "FaUpwork",
  },
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
    title: "Full-Stack Development",
    description:
      "Building scalable web applications using Next.js, React, Node.js, and FastAPI with a focus on performance.",
  },
  {
    icon: "Zap" as const,
    title: "AI & ML Systems",
    description:
      "Integrating LLMs, voice AI agents, and computer vision to solve real-world business problems.",
  },
  {
    icon: "Layers" as const,
    title: "Robotics & SLAM",
    description:
      "Hands-on experience with ROS2, Raspberry Pi, and autonomous navigation for service robots.",
  },
  {
    icon: "Palette" as const,
    title: "Cloud & DevOps",
    description:
      "Streamlining deployments with Docker, CI/CD pipelines, and cloud platforms like Vercel and AWS.",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "AI Blogs Generation Platform",
    description:
      "Built an AI-powered blogs generation agents platform enabling businesses to automate blog creation using LLM-based intelligent workflows and web scraping.",
    image: assets.blogGeneration,
    tags: ["Python", "FastAPI", "Next.js", "LLM", "Web Scraping"],
    live: "https://blogs-generation-system-frontend.vercel.app/",
  },

  {
    title: "Bakhsh Libas - E-commerce Store",
    description:
      "A premium Shopify-based e-commerce store for women's fashion, featuring a curated selection of top brands. Implemented custom theme modifications, optimized user experience, and integrated seamless payment and shipping solutions.",
    image: assets.bakhshLibas,
    tags: ["Shopify", "E-commerce", "Liquid", "Web Design"],
    live: "https://bakhshlibas.com/",
  },
  {
    title: "Luxe Kitchen Cabinets",
    description:
      "A professional WordPress website for kitchen cabinets that showcases premium custom kitchen solutions with a focus on elegant design and user-friendly navigation.",
    image: assets.luxeKitchenCabinets,
    tags: ["WordPress", "Web Development", "PHP", "Responsive Design"],
    live: "https://luxekitchencabinets.vercel.app/",
  },
  {
    title: "WRAITH - Mobile App",
    description:
      "Mobile application for WRAITH robot control and monitoring. Built with Flutter, FastAPI, Supabase, and LLM integration for seamless robot interaction.",
    image: assets.wraithApp,
    tags: ["Flutter", "Dart", "FastAPI", "Supabase"],
  },
  {
    title: "AI Service Booking Agent",
    description:
      "Built an AI-powered agent that automatically books plumbers, electricians, and other services. Features include live slot checking, data logging, calendar invites, and email notifications. Integrated LLM for intelligent decision-making and automated workflow handling using Google Sheets and Calendar APIs.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tags: [
      "Python",
      "Flask",
      "LLM",
      "Google Sheets API",
      "Google Calendar API",
    ],
  },
  {
    title: "WRAITH - Wide Range Autonomous Intelligence",
    description:
      "Advanced voice-controlled, self-driving SLAM robot with two-way voice/text communication. Built with ROS, Python, Flask, FastAPI, STT, LLM, TTS, Raspberry Pi 5, and RPLidar.",
    image: assets.wraithWeb,
    tags: ["ROS", "SLAM", "Python", "FastAPI", "AI"],
    github: "https://github.com/4hmed7ounas/WRAITH",
  },
  {
    title: "3D Food Platform",
    description:
      "Convert 2D food images to 3D models. Frontend using Next.js and Tailwind CSS, backend with Python and FastAPI.",
    image: assets.food3D,
    tags: ["Next.js", "FastAPI", "Python", "3D Modeling"],
  },
  {
    title: "Ilahi Fabrics - E-commerce Website",
    description:
      "Full-stack e-commerce platform with Next.js, MongoDB, Python, and FastAPI. Features complete shopping experience with secure checkout.",
    image: assets.ilahiFabrics,
    tags: ["Next.js", "MongoDB", "FastAPI", "Tailwind CSS"],
  },
  {
    title: "Voice Chatbot - Low Latency AI",
    description:
      "Ultra-low latency voice chatbot using Deepgram (STT), Groq (LLM), and Cersatia (TTS). Features Redis caching and Docker.",
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    tags: ["Deepgram", "Groq", "Redis", "Docker"],
  },
  {
    title: "GiGO - AI Chatbot & Freelancing Platform",
    description:
      "An AI-Chatbot and freelancing platform developed using Next.js, TypeScript, and Firebase. Features custom dataset training and intelligent matching.",
    image: assets.gigoChatbot,
    tags: ["Next.js", "TypeScript", "Firebase", "Node.js", "AI"],
  },
  {
    title: "Pharmacy Management System",
    description:
      "A Pharmacy Management System to optimize inventory, prescription tracking, and customer info using .NET, SQL and C#.",
    image:
      "https://images.unsplash.com/photo-1676364423874-19c785db3e61?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "SQL", "C#"],
  },
  {
    title: "Light Seeking Robot",
    description:
      "Circuit Analysis based Light Seeking Robot, moves when sensing light using LDR sensors.",
    image:
      "https://images.unsplash.com/photo-1616857002727-7d4228493f2d?auto=format&fit=crop&q=80&w=800",
    tags: ["Robotics", "Circuit Design", "Sensors"],
  },
  {
    title: "6-bit Mini-Computational Unit",
    description:
      "Digital logic design based project using registers, multiplexers, and logic gates for arithmetic and bit operations.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["Digital Logic", "Circuits"],
  },
  {
    title: "6-bit Beauty Saloon",
    description:
      "A logical design of a beauty saloon service selector and payment return system.",
    image:
      "https://images.unsplash.com/photo-1605165467147-e34d3d5467b9?auto=format&fit=crop&q=80&w=800",
    tags: ["Digital Logic", "Design"],
  },
  {
    title: "3D Universal Joint",
    description:
      "3D Model of a Universal Joint created using SolidWorks and AutoCad as a university project.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    tags: ["SolidWorks", "AutoCad", "3D Design"],
  },
];

export const professionalProjects: ProfessionalProject[] = [
  {
    title: "LGU WordPress Website & Custom AI Chatbot Plugin",
    company: "LGU",
    role: "Software Engineer & System Engineer",
    technologies: ["WordPress", "PHP", "Groq LLM"],
    description:
      "Maintained the LGU WordPress website and developed a custom AI chatbot plugin that collects user details before generating responses.",
    features: [
      "Groq LLM integration for intelligent responses",
      "Lead generation and user detail collection",
      "Analytics storage for user information",
      "Custom WordPress plugin development",
    ],
    link: "https://lgu.edu.pk/",
  },
  {
    title: "Deeptrace Frontend",
    company: "Deeptrace",
    role: "Frontend Engineer",
    technologies: ["Next.js", "TypeScript"],
    description:
      "Developed and maintained the frontend application for Deeptrace using Next.js and TypeScript with a scalable and responsive architecture.",
    features: [
      "Scalable frontend architecture",
      "Responsive design implementation",
      "TypeScript for type safety and maintainability",
      "Next.js optimization",
    ],
    link: "https://deepsearch-flame.vercel.app/",
  },
  {
    title: "Supportiyo Website",
    company: "Supportiyo",
    role: "Lead Frontend Engineer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Built the official Supportiyo website with a modern responsive UI and optimized frontend architecture.",
    features: [
      "Modern, premium UI design",
      "Optimized frontend performance",
      "Responsive layout for all devices",
      "Clean and maintainable code structure",
    ],
    link: "https://supportiyo.ai",
  },
  {
    title: "Supportiyo Blog Generation System",
    company: "Supportiyo",
    role: "Lead Full Stack Engineer",
    technologies: [
      "Python",
      "FastAPI",
      "Supabase",
      "Groq LLM",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Fly.io",
    ],
    description: "Developed a full-stack AI-powered blog generation platform.",
    features: [
      "FastAPI backend with Supabase authentication",
      "Groq LLM integration with custom-trained datasets",
      "Automated blog generation workflow",
      "Deployment on Fly.io",
      "Next.js & Tailwind CSS frontend",
    ],
  },
  {
    title: "Supportiyo Dashboard",
    company: "Supportiyo",
    role: "Lead Full Stack Engineer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Developed a comprehensive dashboard system for managing businesses, agents, calls, appointments, orders, API keys, and integrations.",
    features: [
      "Full CRUD functionality for business resources",
      "Simpro and Zapier integrations",
      "Real-time data visualization",
      "API key management system",
    ],
    link: "https://dashboard.supportiyo.ai/",
  },
  {
    title: "Supportiyo Mobile App (Android & iOS)",
    company: "Supportiyo",
    role: "Lead Mobile App Engineer",
    technologies: ["Flutter", "Dart"],
    description:
      "Developed a cross-platform mobile application currently used internally by clients.",
    features: [
      "Access to business details and operational data",
      "Call recordings and transcripts interface",
      "Appointments and orders management",
      "Billing information tracking",
    ],
  },
  {
    title: "Shared Backend System for Dashboard & Mobile App",
    company: "Supportiyo",
    role: "Backend Engineer & System Architect",
    technologies: [
      "Python",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Fly.io",
      "JWT",
      "Google OAuth",
      "Stripe",
    ],
    description:
      "Developed and maintained the centralized backend system powering both the dashboard and mobile applications.",
    features: [
      "Authentication systems with JWT and Google OAuth",
      "Payment integrations with Stripe",
      "Redis caching for performance",
      "Third-party integrations (Simpro, Zapier)",
      "Dockerized deployment on Fly.io",
    ],
  },
  {
    title: "Supportiyo Voice System Architecture",
    company: "Supportiyo",
    role: "Voice Systems Engineer",
    technologies: ["Voice AI", "System Design"],
    description:
      "Maintained and improved the voice system architecture for Supportiyo.",
    features: [
      "Ensured system reliability and scalability",
      "Optimized communication workflows",
      "Continuous system performance improvement",
    ],
  },
  {
    title: "Credits Monitoring & Email Automation Platform",
    company: "Supportiyo",
    role: "Automation Engineer",
    technologies: ["Python", "API Integrations", "Fly.io"],
    description:
      "Built an automated credit monitoring and email notification platform.",
    features: [
      "Usage tracking through integrated APIs",
      "Automated email updates and notifications",
      "Operational monitoring for platform visibility",
      "Reliable background processing",
    ],
  },
  {
    title: "Fly Simple",
    company: "Fly Simple",
    role: "Full Stack Engineer",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Flight APIs",
      "Fly.io",
    ],
    description:
      "Developed the frontend platform for Fly Simple with integrations to multiple flight data APIs.",
    features: [
      "Integration with multiple flight data APIs",
      "Full-stack development (Next.js & Python)",
      "Automated flight data processing",
      "Deployment on Fly.io",
    ],
    link: "https://flysimple.vercel.app/",
  },
  {
    title: "Supportiyo Zapier Custom App & Workflow Integrations",
    company: "Supportiyo",
    role: "Integration Engineer & Backend Developer",
    technologies: ["Node.js", "Zapier Platform", "REST APIs"],
    description:
      "Developed a custom Zapier application for Supportiyo that allows users to securely fetch appointment data using API keys and integrate it with their own CRM systems, databases, Google Sheets, and third-party platforms. Built scalable workflow automations and API integrations to simplify data synchronization across external services.",
    features: [
      "Secure API key authentication for data access",
      "Bidirectional sync with CRM, databases, and Google Sheets",
      "Customizable Zapier triggers and actions",
      "Scalable workflow automation for enterprise use",
    ],
  },
  {
    title: "PIXOU - AI Image Generation Platform",
    company: "Grootcore Systems",
    role: "Lead Frontend & Mobile Engineer",
    technologies: ["Flutter", "Dart", "Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Developed both the mobile application and frontend web platform for PIXOU's AI-powered text-to-image generation platform. Built responsive user interfaces, optimized user experience across devices, and implemented a scalable frontend architecture for image generation workflows and platform interactions.",
    features: [
      "Cross-platform Flutter mobile app",
      "Next.js web interface with Tailwind CSS design",
      "Real-time image generation UI",
      "Scalable architecture for handling AI model requests",
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "AI, ML & Voice Tech",
    items: [
      "Generative AI Tools",
      "Prompt Engineering",
      "AI Voice Systems",
      "Zapier, Make, n8n",
      "Large Language Models (LLMs)",
      "Groq",
      "OpenAI",
      "Gemini",
      "Deepgram",
      "Cersatia",
      "Ollama",
      "ElevenLabs",
      "STT/TTS",
      "Computer Vision",
      "Function Calling",
      "MLOps",
    ],
  },
  {
    category: "Full-Stack & Web",
    items: [
      "Next.js",
      "React.js",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Flask",
      "Django",
      "ASP.NET",
      "Three.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    category: "Robotics & Embedded",
    items: [
      "ROS / ROS2",
      "Visual SLAM",
      "Raspberry Pi",
      "RPLidar",
      "Sensor Fusion",
      "Robotics",
      "Lego Robotics",
      "Circuit Analysis",
      "Digital Logic Design",
      "SOLIDWORKS",
      "AutoCAD",
    ],
  },
  {
    category: "Cloud & Databases",
    items: [
      "Firebase",
      "Supabase",
      "MongoDB",
      "Vercel / Fly.io / Render.com",
      "MySQL",
      "PostgreSQL",
      "Microsoft Azure",
      "Redis",
      "Docker",
      "System Architecture",
      "Google APIs",
    ],
  },
  {
    category: "Mobile & Design",
    items: [
      "Flutter",
      "Dart",
      "WordPress",
      "Shopify",
      "Wix",
      "Webflow",
      "UI/UX Design",
      "Figma",
      "Graphic Design",
      "Canva",
      "Responsive Web Design",
    ],
  },
  {
    category: "Languages & Tools",
    items: [
      "Python",
      "C / C++ / C#",
      "PHP",
      "Git / GitHub",
      "CI/CD",
      "Bash",
      "Assembly Language",
      "Technical Leadership",
      "Problem Solving",
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Founding Software Engineer",
    company: "Supportiyo",
    period: "Dec 2025 — Present",
    description:
      "Leading Supportiyo's technology and product engineering across AI voice systems, backend infrastructure, and platform development. Responsible for system architecture, scalability, security, and production readiness.",
  },
  {
    role: "Voice System Architect",
    company: "Supportiyo",
    period: "Jan 2025 — Dec 2025",
    description:
      "Contributed to the design and development of advanced voice communication systems in the Product Development Team.",
  },
  {
    role: "Web & Mobile App Developer",
    company: "Upwork (Freelance)",
    period: "Sep 2024 — Present",
    description:
      "Freelance developer specializing in Node.js, Next.js, and mobile applications. Also providing expertise in electrical circuit design with a focus on digital logic.",
  },
  {
    role: "Trainee Web Developer",
    company: "Grootcore Systems",
    period: "Sep 2024 — Jan 2025",
    description:
      "Focused on Next.js, Tailwind CSS, and MERN stack. Contributed to innovative projects in a collaborative environment.",
  },
  {
    role: "Trainee Mobile Developer",
    company: "Grootcore Systems",
    period: "Jun 2024 — Nov 2024",
    description:
      "Honed skills in Flutter and Dart while building mobile interfaces and optimizing app performance.",
  },
  // {
  //   role: "Media Coordinator",
  //   company: "IEEE NUCES LAHORE",
  //   period: "Oct 2024 — Dec 2024",
  //   description:
  //     "Led media coordination and visual content creation using Canva, while managing team leadership for the student chapter.",
  // },
  {
    role: "Frontend Developer & Graphic Designer",
    company: "Entracloud",
    period: "Jun 2024 — Aug 2024",
    description:
      "Dual role involving frontend development with HTML/CSS and creating visual assets using Figma and Canva.",
  },
  {
    role: "Circuit Designer & Programmer",
    company: "Fiverr (Freelance)",
    period: "Jan 2022 — Aug 2024",
    description:
      "Specialized in digital logic design, circuit simulation (LogicWorks, CircuitMaker), and programming in C++ and Assembly Language.",
  },
  // {
  //   role: "Deputy Head (Robo Rumble & Videography)",
  //   company: "SOFTEC",
  //   period: "Jan 2024 — Jun 2024",
  //   description:
  //     "Co-led the Robo Rumble event and managed the videography department, overseeing event planning and video production.",
  // },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = [
  {
    degree: "Bachelor's in Computer Science (Robotics & Automations)",
    institution: "FAST - National University of Computer and Emerging Sciences",
    period: "Sept 2021 — Jan 2026",
    details:
      "CGPA: 3.11 / 4.0. Coursework: Data Structures, AI, ML, MLOps, GenAI, IOT, Robotics.",
  },
  {
    degree: "F.Sc Pre-Engineering",
    institution: "Punjab Group of Colleges",
    period: "Sept 2019 — Jul 2021",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  { title: "IEEE Student Membership", icon: "🎓" },
  { title: "Web Development Virtual Internship", icon: "💼" },
  { title: "Participation in Web Devathon", icon: "🏆" },
  { title: "Basic JavaScript Programming", icon: "📜" },
  { title: "HTML & CSS Fundamentals", icon: "🌐" },
  { title: "Build Website with WordPress", icon: "📱" },
];

// ─── Honors & Awards ──────────────────────────────────────────────────────────

export const awards: Award[] = [
  { title: "Academic Brilliance (Fall 2021, Spring 2022, Fall 2022)" },
  { title: "Dean's List (Fall 2021, Spring 2022, Fall 2022)" },
  { title: "Exceptional Volunteer - SOFTEC 2023" },
  { title: "Participation in Web Dev Competition - NASCON 2024" },
];
