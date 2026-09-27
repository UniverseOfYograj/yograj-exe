import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../config/site";

function GitHubMark({ size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.64-1.23-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 1.75 3.04 1.34.1-.72.39-1.22.7-1.5-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.04-1.13 3.04-1.13.61 1.53.23 2.66.12 2.94.71.77 1.14 1.76 1.14 2.97 0 4.27-2.6 5.2-5.08 5.48.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInMark({ size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.98V9h2.95v9.45ZM6.46 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74h-2.95v-4.6c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.78 1.2-1.78 2.43v4.68H9.25V9h2.83v1.29h.04c.39-.74 1.36-1.53 2.8-1.53 2.99 0 3.54 1.97 3.54 4.53v5.16Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "GitHub", icon: GitHubMark, href: siteConfig.github },
  { label: "LinkedIn", icon: LinkedInMark, href: siteConfig.linkedin },
  ...(siteConfig.resume
    ? [{ label: "Resume", icon: FileText, href: siteConfig.resume }]
    : []),
];

function FooterEarth() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.img
      src="/earth-horizon-ai.png"
      alt=""
      loading="lazy"
      decoding="async"
      className="footer-earth pointer-events-none absolute left-0 top-[-10vw] max-w-none max-[639px]:top-[115px]"
      animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
      transition={{
        duration: 42,
        repeat: reduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

function FooterRocket() {
  const [hovered, setHovered] = useState(false);
  const [launched, setLaunched] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-label={launched ? "Rocket launching" : "Launch the rocket"}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => {
        if (!reduceMotion) setLaunched(true);
      }}
      onAnimationComplete={() => {
        if (launched) setLaunched(false);
      }}
      animate={launched ? { y: [0, -25, 0] } : { y: 0 }}
      transition={
        launched
          ? { duration: 0.85, times: [0, 0.42, 1], ease: [0.22, 0.72, 0.25, 1] }
          : { duration: 0.1 }
      }
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      className="group relative grid h-10 w-9 shrink-0 place-items-center rounded-full text-cyan-100 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-200"
    >
      {launched && !reduceMotion && (
        <motion.span
          className="pointer-events-none absolute bottom-0 left-1/2 h-6 w-0.5 origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-100/80 to-transparent blur-[1px]"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          aria-hidden="true"
        />
      )}
      <motion.svg
        viewBox="0 0 32 40"
        className="relative z-10 h-8 w-7 overflow-visible drop-shadow-[0_0_8px_rgba(53,232,255,.3)]"
        animate={!launched && !reduceMotion ? { y: [0, -1.5, 0] } : { y: 0 }}
        transition={{
          duration: 2.8,
          repeat: !launched && !reduceMotion ? Infinity : 0,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <path
          d="M16 3C10.5 7.5 8 14.1 8 21v5h16v-5c0-6.9-2.5-13.5-8-18Z"
          fill="#071725"
          stroke="#9AEFFF"
          strokeWidth="1.4"
        />
        <path
          d="m8 19-4 5v5l5-3m15-7 4 5v5l-5-3"
          fill="#0A2635"
          stroke="#4FD7F0"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="16" r="3" fill="#0A3042" stroke="#6CE4F4" strokeWidth="1.2" />
        <motion.path
          d="M13 26h6c-.4 3-1.4 6-3 9-1.6-3-2.6-6-3-9Z"
          fill="#FF9C50"
          animate={
            reduceMotion
              ? { opacity: 0.6, scaleY: 0.85 }
              : hovered
                ? { opacity: [0.72, 1, 0.78], scaleY: [0.85, 1.18, 0.9] }
                : { opacity: [0.45, 0.78, 0.45], scaleY: [0.75, 1, 0.75] }
          }
          transition={{
            duration: hovered ? 0.45 : 1.5,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "16px 26px" }}
        />
        {hovered && !reduceMotion && (
          <>
            <motion.circle
              cx="7"
              cy="31"
              r="1"
              fill="#FFD18A"
              animate={{ opacity: [0, 0.9, 0], y: [0, 5] }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx="24"
              cy="32"
              r=".8"
              fill="#FF9C50"
              animate={{ opacity: [0, 0.9, 0], y: [0, 4] }}
              transition={{
                duration: 0.6,
                delay: 0.18,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </>
        )}
      </motion.svg>
    </motion.button>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      id="contact"
      className="mission-complete relative isolate min-h-[320px] overflow-hidden border-t border-cyan-100/10 bg-[#020814] sm:min-h-[340px]"
    >
      <FooterEarth />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-6 sm:pb-8 sm:pt-16">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-mono text-[9px] tracking-[0.24em] text-cyan-100/75">
              YOGRAJ TRIPATHI
            </p>
            <h2 className="mt-2 bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text font-display text-3xl font-bold tracking-[0.08em] text-transparent sm:text-4xl">
              Made on Earth
            </h2>
            <p className="mt-2 text-xs tracking-[0.12em] text-slate-300/75 sm:text-sm">
              Curiosity <span className="text-cyan-200">•</span> Code{" "}
              <span className="text-cyan-200">•</span> Craft
            </p>
          </motion.div>

          <nav className="flex flex-wrap items-center gap-2.5" aria-label="Social links">
            <FooterRocket />
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${link.label} profile`}
                  className={`footer-social-link footer-social-link-${link.label.toLowerCase()} inline-flex min-h-10 items-center gap-2 rounded-full border border-cyan-100/20 bg-[#020814]/45 px-3.5 text-xs text-slate-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200`}
                >
                  <Icon size={14} />
                  {link.label}
                  <ArrowUpRight size={12} />
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="footer-top-link inline-flex w-fit items-center gap-1.5 font-mono text-[8px] tracking-[0.16em] text-slate-200 transition-colors hover:text-cyan-100"
          >
            RETURN TO STARS <ArrowUpRight size={12} />
          </a>
          <span className="footer-copyright">
            © {new Date().getFullYear()} · ALL RIGHTS RESERVED · DESIGNED BY{" "}
            {siteConfig.name.toUpperCase()}
          </span>
        </div>
      </div>
    </footer>
  );
}
