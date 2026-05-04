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
      "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "SQL", "C#"],
  },
  {
    title: "Light Seeking Robot",
    description:
      "Circuit Analysis based Light Seeking Robot, moves when sensing light using LDR sensors.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
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
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
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
