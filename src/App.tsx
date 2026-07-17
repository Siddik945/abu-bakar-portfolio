import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  Trophy,
  X,
} from "lucide-react";
import SectionTitle from "./components/SectionTitle";
import Reveal from "./components/Reveal";
import { portfolio } from "./data/portfolio";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.25.78-.55v-2.14c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0 1 12 5.95c.97 0 1.93.13 2.84.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.35-5.23 5.64.41.36.78 1.05.78 2.12v3.15c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.33V8.98h3.42v1.57h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.31 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.09 20.45H3.53V8.98h3.56v11.47Z" />
    </svg>
  );
}

const navItems = ["About", "Skills", "Projects", "Achievements", "Contact"];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    const shouldUseDark = stored ? stored === "dark" : true;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 selection:bg-cyan-300 selection:text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-50 dark:opacity-35" />
      <div className="pointer-events-none fixed left-[-8rem] top-24 z-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none fixed right-[-10rem] top-[35rem] z-0 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 font-display text-sm font-extrabold text-white shadow-lg shadow-cyan-500/10 dark:bg-white dark:text-slate-950">
              AB
            </span>
            <span className="hidden font-display text-sm font-bold tracking-tight sm:block">
              Abu Bakar Siddique
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="icon-button"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="mailto:absiddik945@gmail.com"
              className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-600 sm:inline-flex dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              Hire me
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="icon-button md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden dark:border-white/10 dark:bg-slate-950">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="relative flex min-h-screen items-center pt-28"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                {portfolio.availability}
              </div>

              <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
                Building useful products with{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  clean code.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I’m{" "}
                <strong className="text-slate-950 dark:text-white">
                  {portfolio.name}
                </strong>
                , a {portfolio.role.toLowerCase()} focused on modern React
                interfaces, scalable backend APIs and practical business
                systems.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="primary-button">
                  View projects <ArrowDown size={17} />
                </a>
                <a
                  href="/Md_Abu_Bakar_Siddique_Resume.pdf"
                  download
                  className="secondary-button"
                >
                  <Download size={17} /> Download résumé
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} /> {portfolio.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Mail size={16} /> {portfolio.email}
                </span>
              </div>
            </Reveal>

            <Reveal delay={150} className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-violet-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/40">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-display text-sm font-black text-white">
                      AB
                    </div>
                    <div>
                      <p className="font-display font-bold text-slate-950 dark:text-white">
                        Developer profile
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        React • NestJS • Databases
                      </p>
                    </div>
                  </div>
                  <Sparkles className="text-cyan-500" size={22} />
                </div>

                <div className="grid grid-cols-2 gap-3 py-5">
                  {portfolio.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                    >
                      <p className="font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[
                    "Responsive frontend development",
                    "Secure REST API integration",
                    "Production-focused problem solving",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-slate-950"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-cyan-400 dark:text-cyan-600"
                      />{" "}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="section-shell">
          <SectionTitle
            eyebrow="About me"
            title="From problem solving to production software"
            description="I combine competitive programming discipline with hands-on full-stack development to build software that is understandable, maintainable and useful."
          />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <article className="surface-card h-full p-7 sm:p-9">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <Code2 />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                  Developer mindset
                </h3>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  {portfolio.summary}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Clean UI",
                    "API design",
                    "Database integration",
                    "Authentication",
                    "Business workflows",
                  ].map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="surface-card h-full p-7 sm:p-9">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                  <GraduationCap />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                  Education
                </h3>
                <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {portfolio.education.degree}
                </p>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  {portfolio.education.school}
                </p>
                <p className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300">
                  {portfolio.education.period}
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionTitle
            eyebrow="Technical skills"
            title="A modern full-stack toolkit"
            description="Technologies and working habits I use to move from concept to responsive interface, secure API and structured data."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.skills.map((group, index) => (
              <Reveal key={group.title} delay={index * 60}>
                <article className="surface-card group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 dark:hover:border-cyan-400/30">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:group-hover:bg-cyan-300">
                      <Layers3 size={20} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionTitle
            eyebrow="Selected projects"
            title="Software designed for real work"
            description="Full-stack projects showing dashboard design, authentication, data operations, reporting, inventory and sales workflows."
          />
          <div className="space-y-7">
            {portfolio.projects.map((project, index) => (
              <Reveal key={project.title}>
                <article className="surface-card relative overflow-hidden p-7 sm:p-9">
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent}`}
                  />
                  <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                        {project.type}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span className="tag" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <a href={project.live} className="primary-button">
                          <ExternalLink size={17} /> Live demo
                        </a>
                        <a href={project.frontend} className="secondary-button">
                          <GithubIcon size={17} /> Frontend
                        </a>
                        <a href={project.backend} className="secondary-button">
                          <GithubIcon size={17} /> Backend
                        </a>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/50 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-slate-950/50">
                      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                        <BriefcaseBusiness size={17} /> Project highlights
                      </div>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                          >
                            <CheckCircle2
                              className="mt-0.5 shrink-0 text-emerald-500"
                              size={17}
                            />{" "}
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="achievements" className="section-shell">
          <SectionTitle
            eyebrow="Achievements"
            title="Competitive programming and teamwork"
            description="Competition experience that strengthened my algorithmic thinking, focus, speed and ability to work under pressure."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="surface-card h-full p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                    <Trophy />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                    Highlights
                  </h3>
                </div>
                <ul className="mt-7 space-y-4">
                  {portfolio.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 leading-7 text-slate-600 dark:text-slate-300"
                    >
                      <Award
                        className="mt-1 shrink-0 text-amber-500"
                        size={18}
                      />{" "}
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="surface-card h-full p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                    <BookOpen />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                    Problem-solving profiles
                  </h3>
                </div>
                <div className="mt-7 space-y-3">
                  {portfolio.coding.map((item) => (
                    <div
                      key={item.platform}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.035]"
                    >
                      <div>
                        <p className="font-bold text-slate-950 dark:text-white">
                          {item.platform}
                        </p>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          {item.detail}
                        </p>
                      </div>
                      <span className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
                        {item.result}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-shell pb-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.25rem] bg-slate-950 px-6 py-14 text-white shadow-2xl shadow-cyan-500/10 sm:px-12 sm:py-16 dark:bg-white dark:text-slate-950">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl" />
              <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 dark:text-cyan-700">
                    Let’s work together
                  </p>
                  <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Have a role, project or collaboration in mind?
                  </h2>
                  <p className="mt-5 max-w-2xl leading-8 text-slate-300 dark:text-slate-600">
                    I’m interested in opportunities where I can contribute to
                    product development, learn from a strong team and solve
                    meaningful technical problems.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <a
                    href={`mailto:${portfolio.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 dark:bg-slate-950 dark:text-white"
                  >
                    <Mail size={18} /> Email me
                  </a>
                  <a
                    href={`tel:${portfolio.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10 dark:border-slate-300 dark:hover:bg-slate-100"
                  >
                    <Phone size={18} /> Call
                  </a>
                </div>
              </div>
              <div className="relative mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-7 dark:border-slate-200">
                <a href={portfolio.social.github} className="social-button">
                  <GithubIcon size={18} /> GitHub <ArrowUpRight size={15} />
                </a>
                <a href={portfolio.social.linkedin} className="social-button">
                  <LinkedinIcon size={18} /> LinkedIn <ArrowUpRight size={15} />
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-slate-300 dark:border-slate-200 dark:text-slate-600">
                  <MapPin size={16} /> {portfolio.location}
                </span>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-200 px-5 py-7 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        © {new Date().getFullYear()} {portfolio.name}. Built with React.js and
        Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
