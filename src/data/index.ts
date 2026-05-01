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
  bio: "I'm Ahmed Younas, a passionate developer and problem solver with a strong focus on AI, DevOps, and full-stack development. I love building intelligent, reliable systems — from FastAPI backends integrated with Stripe billing and MongoDB Atlas, to Next.js web apps enhanced with APIs like Spotify and Twilio.",
  heroTagline: "I Develop Digital Products That Drive Growth & Revenue.",
  heroDescription:
    "A passionate developer and problem solver with a strong focus on AI, DevOps, and full-stack development.",
};

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/4hmed7ounas", icon: "FaGithub" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ahmedyounas007",
    icon: "FaLinkedin",
  },
  { name: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
  { name: "Email", url: "mailto:ahmedyounas007@outlook.com", icon: "Mail" },
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
    title: "WRAITH - Wide Range Autonomous Intelligence",
    description:
      "Advanced voice-controlled, self-driving SLAM robot with two-way voice/text communication. Built with ROS2, Python, Flask, FastAPI, STT, LLM, TTS, Raspberry Pi 5, and RPLidar.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    tags: ["ROS2", "Python", "FastAPI", "AI", "Raspberry Pi"],
    github: "https://github.com/4hmed7ounas/WRAITH",
  },
  {
    title: "WRAITH - Mobile App",
    description:
      "Mobile application for WRAITH robot control and monitoring. Built with Flutter, FastAPI, Supabase, and LLM integration for seamless robot interaction.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    tags: ["Flutter", "Dart", "FastAPI", "Supabase"],
  },
  {
    title: "AI Blogs Generation Platform",
    description:
      "Built an AI-powered blogs generation agents platform enabling businesses to automate blog creation using LLM-based intelligent workflows and web scraping.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "FastAPI", "Next.js", "LLM", "Web Scraping"],
  },
  {
    title: "3D Food Platform",
    description:
      "Convert 2D food images to 3D models. Frontend using Next.js and Tailwind CSS, backend with Python and FastAPI.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "FastAPI", "Python", "3D Modeling"],
  },
  {
    title: "E-commerce Website",
    description:
      "Full-stack e-commerce platform with Next.js, MongoDB, Python, and FastAPI. Features complete shopping experience with secure checkout.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
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
    title: "GiGo. Chat - AI Chatbot",
    description:
      "An AI-Chatbot developed using Next.js and Gemini API. Users can train the chatbot on their own datasets.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c2079ee3967?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Gemini API", "AI"],
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
    category: "Full-Stack & Backend",
    items: [
      "Next.js",
      "React.js",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "ASP.NET",
      "Python",
    ],
  },
  {
    category: "AI/ML & Voice Tech",
    items: [
      "Groq",
      "Gemini",
      "Deepgram",
      "Cersatia",
      "STT/TTS",
      "Computer Vision",
      "LLMs",
    ],
  },
  {
    category: "Robotics & Embedded",
    items: [
      "ROS2",
      "SLAM",
      "Raspberry Pi",
      "RPLidar",
      "Sensor Fusion",
      "Circuit Analysis",
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      "MongoDB",
      "MySQL",
      "Supabase",
      "Redis",
      "Docker",
      "Vercel",
      "Fly.io",
    ],
  },
  {
    category: "Mobile & UI/UX",
    items: ["Flutter", "Dart", "Tailwind CSS", "Figma", "Responsive Design"],
  },
  {
    category: "DevOps & Languages",
    items: ["Docker", "CI/CD", "C/C++", "C#", "Git", "Bash"],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Founding Engineer",
    company: "Supportiyo LTD",
    period: "Jan 2025 — Present",
    description:
      "Building and integrating AI-driven solutions for real-time customer communication. Working with Next.js, FastAPI, and MongoDB. Integrating Twilio, Stripe, and Deepgram to automate call handling and billing.",
  },
  {
    role: "Trainee Mobile App & Web Developer",
    company: "Grootcore Systems",
    period: "Jun 2024 — Dec 2024",
    description:
      "Developed responsive applications using Next.js, React and Tailwind CSS. Built mobile interfaces using Flutter and Dart. Optimized API performance and integrated AI-driven features.",
  },
  {
    role: "Freelance Developer",
    company: "UpWork",
    period: "2022 — Present",
    description:
      "Specializing in web development, electrical circuit design, and digital logic design. Successfully completed multiple projects with 5-star ratings.",
  },
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
