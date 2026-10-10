import { useState } from "react"
import portraitImage from "./portrait.jpg"
import clipGeniusImage from "./clipgenius_mockup_1791621647426.jpg"
import intelliMeetImage from "./intellimeet_mockup_1791621635666.jpg"
import outreachImage from "./outreach_mockup_1791621683206.jpg"
import pricePulseImage from "./pricepulse_mockup_1791621672129.jpg"
import roadGuardImage from "./roadguard_mockup_1791621659994.jpg"

const projects = [
  {
    index: "01",
    title: "IntelliMeet",
    label: "AI Multilingual Video Conferencing",
    description:
      "A real-time meeting platform where people speaking different languages communicate through live transcription, translation, and text-to-speech.",
    stack: ["React 19", "WebRTC", "LiveKit", "Socket.IO", "MongoDB"],
    metric: "3 auth methods",
    href: "https://github.com/sohaib075/FYP-IntelliMeet",
    variant: "meeting",
  },
  {
    index: "02",
    title: "ClipGenius",
    label: "AI Viral Clip Generator",
    description:
      "Transforms long-form videos into social-ready clips with highlight detection, animated captions, smart cropping, and AI narration.",
    stack: ["Python", "Gemini", "Groq Whisper", "FFmpeg", "Expo"],
    metric: "4 publishing platforms",
    href: "https://github.com/sohaib075/AI-Viral-Clip-Generator",
    variant: "clips",
  },
  {
    index: "03",
    title: "RoadGuard AI",
    label: "Traffic Safety Analytics",
    description:
      "Computer vision system that detects road users, identifies seven safety event categories, and turns incidents into actionable evidence.",
    stack: ["YOLOv8", "OpenCV", "FastAPI", "Next.js", "Leaflet"],
    metric: "22 automated tests",
    href: "https://github.com/sohaib075/traffic-safety-analytics",
    variant: "traffic",
  },
  {
    index: "04",
    title: "Price Intelligence",
    label: "Pakistan Supermarket Data Pipeline",
    description:
      "A ten-stage data pipeline that collects, cleans, matches, and analyzes pricing across five major Pakistani supermarket chains.",
    stack: ["Python", "Pandas", "Playwright", "SciPy", "GraphQL"],
    metric: "525K+ records",
    href: "https://github.com/sohaib075/pakistan-supermarket-price-intelligence",
    variant: "data",
  },
  {
    index: "05",
    title: "Outreach Bot",
    label: "Automated Job Application System",
    description:
      "A rate-limited outreach platform for company discovery, email extraction, queue management, deduplication, and automated sending.",
    stack: ["Python", "Streamlit", "Supabase", "PostgreSQL", "GitHub Actions"],
    metric: "3 core modules",
    href: "https://github.com/sohaib075/automated-job-application-bot",
    variant: "outreach",
  },
]

const skills = [
  {
    number: "01",
    title: "Frontend",
    items:
      "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Vite, Framer Motion, Zustand",
  },
  {
    number: "02",
    title: "Backend",
    items:
      "Node.js, Express.js, REST APIs, JWT, Socket.IO, WebRTC, LiveKit, FastAPI",
  },
  {
    number: "03",
    title: "AI & Data",
    items:
      "Python, Pandas, NumPy, Scikit-learn, OpenCV, YOLOv8, FFmpeg, OpenAI API",
  },
  {
    number: "04",
    title: "Database & DevOps",
    items:
      "MongoDB, PostgreSQL, MySQL, Supabase, Docker, Vercel, Render, Cloudinary",
  },
]

function Arrow() {
  return (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  )
}

function ProjectVisual({ variant }: { variant: string }) {
  const images: Record<string, string> = {
    meeting: "/intellimeet_mockup_1791621635666.jpg",
    clips: "/clipgenius_mockup_1791621647426.jpg",
    traffic: "/roadguard_mockup_1791621659994.jpg",
    data: "/pricepulse_mockup_1791621672129.jpg",
    outreach: "/outreach_mockup_1791621683206.jpg",
  };

  const bgs: Record<string, string> = {
    meeting: "bg-[#c9ff45]",
    clips: "bg-[#9b8cff]",
    traffic: "bg-[#ff6846]",
    data: "bg-[#58c7d4]",
    outreach: "bg-[#ffd35a]",
  };

  return (
    <div className={`visual-shell ${bgs[variant] || "bg-[#ffd35a]"}`}>
      <img
        src={images[variant] || images.outreach}
        alt={`${variant} mockup`}
        className="h-full w-full object-cover p-3 transition-transform duration-700 hover:scale-[1.03] md:p-5"
        style={{ borderRadius: "2rem" }}
      />
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e8] text-[#15151b]">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10 lg:px-14">
          <a
            href="#top"
            className="text-xl font-bold tracking-[-0.06em]"
            aria-label="Muhammad Sohaib, home"
          >
            MS<span className="text-[#ff5d3b]">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a className="nav-link" href="#work">
              Projects
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </nav>
          <a
            className="group hidden items-center gap-3 rounded-full bg-[#15151b] px-5 py-3 text-sm font-semibold text-white md:flex"
            href="mailto:sohaibmuhammad429@gmail.com"
          >
            Let’s connect <Arrow />
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/25 text-xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "×" : "≡"}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-4 flex flex-col gap-5 rounded-2xl bg-[#15151b] p-6 text-xl font-semibold text-white md:hidden">
            {["work", "experience", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-5 pb-8 pt-24 md:px-10 md:pb-12 md:pt-32 lg:px-14"
      >
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="mb-10 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.18em] lg:justify-start">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#48a766]" /> Available
              for opportunities
            </p>
            <h1 className="font-display text-[clamp(3rem,12vw,10.5rem)] leading-[0.76] tracking-[-0.065em]">
              Full-stack
              <br />
              <span className="italic">developer</span>
              <span className="text-[#ff5d3b]">.</span>
            </h1>
          </div>
          <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left lg:pb-2">
            <div className="relative mb-6 h-48 w-48 md:mb-8 md:h-56 md:w-56 lg:h-64 lg:w-64">
              <div className="absolute inset-0 -z-10 scale-[1.5] rounded-full bg-[#c9ff45] blur-3xl opacity-60 md:scale-[1.8]" />
              <div className="h-full w-full overflow-hidden rounded-full border-[6px] border-[#f5f1e8] shadow-2xl ring-1 ring-black/5">
                <img
                  src={portraitImage}
                  alt="Muhammad Sohaib"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="relative z-10 text-lg leading-relaxed text-black/65 md:text-2xl">
              I’m Muhammad Sohaib, a MERN developer building scalable web
              products with real-time systems, intelligent automation, and
              applied AI.
            </p>
            <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#work"
                className="group flex items-center gap-3 rounded-full bg-[#15151b] px-6 py-3.5 text-sm font-semibold text-white"
              >
                Explore my work <Arrow />
              </a>
              <a
                href="https://github.com/sohaib075"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full border border-black/25 px-6 py-3.5 text-sm font-semibold"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-12 flex overflow-hidden border-y border-black/15 py-6 text-xs font-bold uppercase tracking-[0.16em] md:mt-16">
          <div className="marquee flex w-max items-center">
            {[1, 2].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-10 px-5 md:gap-32 md:px-16"
              >
                {[
                  "React & Next.js",
                  "TypeScript",
                  "Node & Express",
                  "Python & AI/ML",
                  "MongoDB & SQL",
                  "WebRTC & Socket.IO",
                  "Tailwind CSS",
                  "Docker & Deployment",
                ].map((skill) => (
                    <span
                      key={skill}
                      className="flex shrink-0 items-center gap-10 whitespace-nowrap md:gap-24"
                    >
                      <span className="text-black/80">{skill}</span>
                      <span className="h-2 w-2 rounded-full bg-[#c9ff45] ring-4 ring-[#c9ff45]/30" />
                    </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="bg-[#15151b] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 grid gap-6 border-b border-white/15 pb-8 md:grid-cols-2 md:items-end md:mb-20">
            <div>
              <p className="eyebrow text-[#c9ff45]">Selected projects</p>
              <h2 className="font-display text-6xl tracking-[-0.045em] md:text-8xl">
                Built to work.
              </h2>
            </div>
            <p className="max-w-lg text-lg leading-relaxed text-white/55 md:justify-self-end">
              End-to-end products spanning real-time communication, generative
              AI, computer vision, data engineering, and automation.
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-20 md:grid-cols-2">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className={`group ${
                  i === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8" : ""
                }`}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ProjectVisual variant={project.variant} />
                </a>
                <div
                  className={
                    i === 0
                      ? "mt-7 md:mt-0 md:flex md:flex-col md:justify-center md:px-8"
                      : "mt-7"
                  }
                >
                  <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                    <span>{project.index}</span>
                    <span>{project.metric}</span>
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#c9ff45]">
                    {project.label}
                  </p>
                  <h3 className="font-display mb-4 text-5xl tracking-[-0.035em] md:text-6xl">
                    {project.title}
                  </h3>
                  <p className="max-w-xl leading-relaxed text-white/55">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 px-3 py-1.5 text-[0.68rem] font-semibold text-white/65"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-7 inline-flex w-fit items-center gap-3 text-sm font-bold"
                  >
                    View repository <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="px-5 py-20 md:px-10 md:py-28 lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 className="font-display text-6xl leading-none tracking-[-0.045em] md:text-8xl">
                Learning by building.
              </h2>
            </div>
            <div className="border-t border-black/20">
              {[
                [
                  "Jul 2026 — Present",
                  "Web Developer",
                  "KN Softic · Faisalabad",
                  "Building and deploying responsive full-stack applications with React, TypeScript, Node.js, Express, databases, and production hosting.",
                ],
                [
                  "Apr 2026 — Jun 2026",
                  "Machine Learning Intern",
                  "QuantumLogics · Lahore",
                  "Machine learning model development, training pipelines, evaluation, and exposure to production-level ML workflows using Python and Scikit-learn.",
                ],
                [
                  "Sep 2025 — Oct 2025",
                  "Frontend Development Intern",
                  "Nexus AI Digital · Remote",
                  "Built and deployed responsive React interfaces using component architecture, state management, and usability-focused implementation.",
                ],
              ].map(([date, role, company, detail], i) => (
                <article
                  key={role}
                  className="grid gap-4 border-b border-black/20 py-8 md:grid-cols-[2rem_1fr_1.4fr] md:gap-6"
                >
                  <span className="text-xs font-bold text-black/35">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#ef5838]">
                      {date}
                    </p>
                    <h3 className="text-xl font-bold">{role}</h3>
                    <p className="mt-1 text-sm text-black/50">{company}</p>
                  </div>
                  <p className="leading-relaxed text-black/60">{detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-20 rounded-[2rem] bg-[#58c7d4] p-8 md:p-12">
            <p className="eyebrow">Education · 2022—2026</p>
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <h3 className="font-display max-w-4xl text-5xl leading-none tracking-[-0.035em] md:text-7xl">
                BS Computer Science, FAST National University
              </h3>
              <p className="font-semibold">Faisalabad, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="bg-[#c9ff45] px-5 py-20 md:px-10 md:py-28 lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow">Technical toolkit</p>
          <h2 className="font-display mb-16 max-w-4xl text-6xl leading-[0.92] tracking-[-0.045em] md:text-8xl">
            From interface to infrastructure.
          </h2>
          <div className="grid border-t border-black/25 md:grid-cols-2">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="border-b border-black/25 py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10"
              >
                <div className="flex gap-8">
                  <span className="text-xs font-bold text-black/40">
                    {skill.number}
                  </span>
                  <div>
                    <h3 className="mb-4 text-2xl font-bold">{skill.title}</h3>
                    <p className="max-w-lg leading-relaxed text-black/60">
                      {skill.items}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#ff5d3b] px-5 pb-8 pt-20 md:px-10 md:pt-28 lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow">Let’s build something useful</p>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
            <h2 className="font-display text-6xl leading-[0.85] tracking-[-0.05em] md:text-9xl">
              Have an idea?
              <br />
              <span className="italic">Let’s talk.</span>
            </h2>
            <div className="space-y-3">
              <a
                href="mailto:sohaibmuhammad429@gmail.com"
                className="group flex items-center justify-between rounded-full bg-[#15151b] px-6 py-4 font-semibold text-white"
              >
                Email me <Arrow />
              </a>
              <a
                href="tel:+923094257950"
                className="group flex items-center justify-between rounded-full border border-black/30 px-6 py-4 font-semibold"
              >
                +92 309 4257950 <Arrow />
              </a>
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-5 border-t border-black/25 pt-7 text-sm font-semibold md:mt-28 md:flex-row md:items-center md:justify-between">
            <p>© 2025 Muhammad Sohaib</p>
            <div className="flex gap-7">
              <a
                className="nav-link"
                href="https://linkedin.com/in/muhammad-sohaib-5b894524a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="nav-link"
                href="https://github.com/sohaib075"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="nav-link" href="mailto:sohaibmuhammad429@gmail.com">
                Email
              </a>
            </div>
            <a className="nav-link" href="#top">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
