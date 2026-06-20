"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Code2, Play, Pause, Volume2, VolumeX, Maximize2, ArrowRight, Check, Sparkles } from "lucide-react";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const validIndexes: number[] = [];
for (let i = 1; i <= 144; i++) {
  if (i !== 135 && i !== 139 && i !== 140 && i !== 142) {
    validIndexes.push(i);
  }
}

export default function ShowroomPage() {
  const [toast, setToast] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Rotate the 3D character fully over the first 70% of the scroll container height
  const frameIndex = useTransform(scrollYProgress, [0, 0.7], [0, validIndexes.length - 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide up panel transition happens ONLY after the 3D rotation completes (from 75% to 95% scroll progress)
  const canvasY = useTransform(scrollYProgress, [0, 0.75, 0.95], ["0%", "0%", "-100%"]);
  const textY = useTransform(scrollYProgress, [0, 0.75, 0.95], ["100%", "100%", "0%"]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = validIndexes.length;
    const loadedImagesArray: HTMLImageElement[] = [];

    validIndexes.forEach((idx, arrayIdx) => {
      const img = new window.Image();
      const padded = String(idx).padStart(3, "0");
      img.src = `/frames/frame_${padded}.jpg`;
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        loadedImagesArray[arrayIdx] = img;
        if (loadedCount === totalFrames) {
          imagesRef.current = loadedImagesArray;
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setLoaded(true);
        }
      };
    });
  }, []);

  // Draw frame on scroll or resize
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawImage = (index: number) => {
      const img = imagesRef.current[index];
      if (!img) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      // Use Math.max (cover) to fill the screen on both mobile and desktop, aligning to the top of the canvas to avoid cutting off the character's head
      const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const newWidth = imgWidth * ratio;
      const newHeight = imgHeight * ratio;
      const x = (canvasWidth - newWidth) / 2;
      const y = 0;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, newWidth, newHeight);
    };

    // Draw first frame initially
    drawImage(0);

    const unsubscribe = frameIndex.on("change", (val) => {
      const index = Math.min(Math.max(Math.round(val), 0), validIndexes.length - 1);
      drawImage(index);
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const val = frameIndex.get();
      const index = Math.min(Math.max(Math.round(val), 0), validIndexes.length - 1);
      drawImage(index);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded, frameIndex]);

  const handleInteraction = (actionName: string) => {
    setToast(`Navigating to ${actionName}...`);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setToast("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className={`${bebasNeue.variable} min-h-screen text-accent selection:bg-neutral-800 selection:text-accent`}>
      
      {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-background-alt">
        <div className="grid grid-cols-2 w-full h-screen relative pt-5">
          {/* Left Column: Front image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full bg-background-alt"
          >
            <Image
              src="/images/character-front.png"
              alt="Savor Front View"
              fill
              className="object-cover object-top select-none"
              sizes="50vw"
              priority
            />
          </motion.div>

          {/* Right Column: Back image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
            className="relative w-full h-full bg-background-alt"
          >
            <Image
              src="/images/character-back.png"
              alt="Savor Back View"
              fill
              className="object-cover object-top select-none"
              sizes="50vw"
              priority
            />
          </motion.div>

          {/* Text Overlay */}
          <div className="absolute bottom-8 right-6 sm:bottom-20 sm:right-12 max-w-[85%] md:max-w-xl z-10 flex flex-col items-start gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-background-alt text-accent px-5 font-serif py-3.5 font-bold tracking-wide uppercase leading-[0.9] text-3xl sm:text-5xl md:text-6xl select-none"
              // style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
            >
              CODE EVERY.
              <br />
              SINGLE. SYSTEM.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                href="/projects"
                className="text-accent font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest hover:text-accent/60 transition-colors flex items-center gap-2 group mt-1"
              >
                View Focus Areas
                <span className="inline-block transition-transform group-hover:translate-x-1.5 duration-200 text-base">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. PRODUCT CATALOG SECTION ────────────────────────────────── */}
      {/* <section id="catalog" className="bg-background-alt py-16 sm:py-24 px-6 md:px-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => handleInteraction("AI Projects")}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-3/4 w-full overflow-hidden bg-[#0d0d0d] border border-neutral-900">
                <Image
                  src="/images/character-front.png"
                  alt="AI Systems Engineering"
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 select-none"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-baseline gap-0.5 md:gap-2">
                <span 
                  className="text-lg md:text-xl font-bold uppercase tracking-wider text-accent"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  AI SYSTEMS
                </span>
                <span className="text-xs md:text-sm font-light text-neutral-400 font-sans">
                  ROS2 • Python • LLMs
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => handleInteraction("Web Development Projects")}
              className="flex flex-col group cursor-pointer relative"
            >
              <div className="relative aspect-3/4 w-full overflow-hidden bg-[#0d0d0d] border border-neutral-900">
                <div className="absolute top-3 left-3  text-black text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 z-10 select-none">
                  Featured
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInteraction("Web Development Projects");
                  }}
                  className="absolute bottom-3 right-3  text-black p-2.5 rounded-full z-10 shadow-lg md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                  aria-label="View Projects"
                >
                  <Code2 size={14} className="stroke-[2.5]" />
                </button>

                <Image
                  src="/images/character-back.png"
                  alt="Full-Stack Web Development"
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 select-none"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-baseline gap-0.5 md:gap-2">
                <span 
                  className="text-lg md:text-xl font-bold uppercase tracking-wider text-accent"
                  style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
                >
                  FULL-STACK
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm font-sans">
                  <span className="font-light text-accent">Next.js • React • Node.js</span>
                </div>
              </div>
            </motion.div>

            <Link 
              href="/projects"
              className="hidden md:flex flex-col items-center justify-center  aspect-3/4 group cursor-pointer border border-neutral-900 transition-all duration-300 hover:bg-neutral-100"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-black text-xs font-sans font-bold uppercase tracking-widest text-center select-none mb-1">
                  All Projects
                </span>
                <span className="text-black text-5xl font-light tracking-tighter transition-transform group-hover:translate-x-3 duration-300 select-none">
                  →
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section> */}

      {/* ─── 3. VIDEO SECTION & BRAND TEXT ────────────────────────────── */}
      <section className=" text-black border-b border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
          
          {/* Left Column: Background Video Player */}
          <div className="relative bg-background-alt h-[50vh] lg:h-full flex flex-col justify-between overflow-hidden group">
            
            <div className="absolute inset-0 w-full h-full bg-black">
              <video
                src="/videos/intro-video.mp4"
                className="object-cover object-top w-full h-full absolute inset-0 opacity-90 select-none pointer-events-none"
                playsInline
                autoPlay
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
            </div>

            {/* Top Sparkle Ornament */}
            <div className="relative p-6 flex justify-end z-10 pointer-events-none">
              <Sparkles className="text-accent/20" size={24} />
            </div>

          </div>

          {/* Right Column: Custom Copy Section */}
          <div className="flex flex-col justify-center bg-background-alt p-8 sm:p-12 md:p-16 lg:p-24 min-h-[50vh] lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-md"
            >
              <h2 
                className="text-4xl sm:text-5xl font-serif font-bold tracking-normal leading-none text-black mb-6"
                // style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                A PHILOSOPHY OF ROBUST, SCALABLE CODE
              </h2>
              <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                Software has the power to simplify workflows and solve real-world problems. From designing low-latency voice AI agents to deploying full-stack platforms, I build clean systems that are performant and easy to scale.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── 4. TYPOGRAPHY & CHARACTER IMAGE SECTION (3D ON SCROLL) ────── */}
      <section ref={containerRef} className="relative h-[250vh] border-t border-neutral-900 text-background bg-background-alt">
        <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden text-background bg-background-alt">
          
          {/* Column 1 (Text): Appears underneath image on mobile (order-2), left side on desktop (order-1) */}
          <motion.div 
            style={{ y: isMobile ? textY : 0 }}
            className="flex-1 flex items-center justify-center p-8 sm:p-16 md:p-20 order-2 lg:order-1 bg-background-alt h-full w-full absolute lg:relative top-0 left-0 z-10 lg:z-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-xl select-none"
            >
              <h1 
                className="text-[4.5rem] sm:text-[9rem] font-bold font-serif text-black tracking-tighter flex flex-col font-stretch-condensed"
                // style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
              >
                <span>FULL-STACK</span>
                <span>AI</span>
                <span>ENGINEER</span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Column 2 (Canvas): Appears on top on mobile (order-1), right side on desktop (order-2) */}
          <motion.div 
            style={{ y: isMobile ? canvasY : 0 }}
            className="flex-1 bg-background-alt aspect-3/4 sm:aspect-square lg:aspect-auto lg:h-auto min-h-[50vh] lg:min-h-screen border border-neutral-900  order-1 lg:order-2 flex items-center justify-center overflow-hidden h-full w-full absolute lg:relative top-0 left-0"
          >
            {!loaded ? (
              // Loading State
              <div className="flex flex-col items-center gap-4 text-black font-sans">
                <div className="w-12 h-12 rounded-full border-4 border-black/20 border-t-black animate-spin" />
                <span className="text-xs font-semibold tracking-wider uppercase">Loading 3D Showroom {loadingProgress}%</span>
              </div>
            ) : (
              // Canvas Element
              <canvas ref={canvasRef} className="block w-full h-full object-cover" />
            )}
          </motion.div>

        </div>
      </section>
     

    </div>
  );
}
