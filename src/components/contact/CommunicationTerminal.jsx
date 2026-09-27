import {
  ArrowUpRight,
  Code2,
  FileText,
  Mail,
  Network,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";

const contactLinks = [
  ...(siteConfig.email
    ? [
        {
          icon: Mail,
          label: "Email",
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
          action: "SEND EMAIL",
        },
      ]
    : []),
  {
    icon: Code2,
    label: "GitHub",
    value: "UniverseOfYograj",
    href: siteConfig.github,
    action: "VIEW PROFILE",
  },
  {
    icon: Network,
    label: "LinkedIn",
    value: "Connect professionally",
    href: siteConfig.linkedin,
    action: "CONNECT",
  },
  ...(siteConfig.resume
    ? [
        {
          icon: FileText,
          label: "Resume",
          value: "View experience & skills",
          href: siteConfig.resume,
          action: "VIEW RESUME",
        },
      ]
    : []),
];

export default function CommunicationTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="communication-terminal relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[26px] border border-cyan-100/15 bg-[#03111D]/90 p-5 shadow-[0_24px_90px_rgba(0,0,0,.3)] backdrop-blur-xl sm:p-7"
    >
      <div className="communication-scanline pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-100/70 to-transparent" />

      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="font-mono text-[9px] tracking-[0.18em] text-cyan-100/75">
          COMMUNICATION TERMINAL
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-cyan-100">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_#67e8f9]" />
          ONLINE
        </span>
      </div>

      <h3 className="text-3xl font-bold leading-[1.04] text-white sm:text-4xl">
        Let&apos;s build
        <span className="block text-cyan-200">something meaningful.</span>
      </h3>
      <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300/70">
        Open to good conversations, interesting engineering problems, and
        ambitious ideas worth bringing to life.
      </p>

      <div className="mt-6 grid gap-2">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="contact-link-row group flex min-h-[58px] items-center gap-3 rounded-xl border border-cyan-100/[0.08] bg-[#061320]/65 px-3.5 py-2.5 transition-colors hover:border-cyan-100/25 hover:bg-cyan-100/[0.04] sm:px-4"
          >
            <item.icon size={17} className="shrink-0 text-cyan-100" />
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] text-slate-400">{item.label}</span>
              <span className="mt-0.5 block truncate text-xs font-medium text-slate-100/90">
                {item.value}
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[8px] tracking-[0.08em] text-cyan-100/75">
              {item.action}
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="font-mono text-[8px] tracking-[0.14em] text-slate-400">
          SIGNAL STRENGTH
        </span>
        <span className="font-mono text-[9px] text-cyan-100">98%</span>
      </div>
      <div
        className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"
        role="meter"
        aria-label="Communication signal strength"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={98}
      >
        <div className="signal-strength h-full w-[98%] rounded-full bg-gradient-to-r from-cyan-300 to-sky-300" />
      </div>

      <a
        href={siteConfig.email ? `mailto:${siteConfig.email}` : siteConfig.linkedin}
        target={siteConfig.email ? undefined : "_blank"}
        rel={siteConfig.email ? undefined : "noreferrer"}
        className="contact-send-signal mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-amber-200/25 bg-amber-100/[0.06] px-5 text-xs font-semibold text-amber-100 transition hover:border-amber-100/50 hover:bg-amber-100/[0.1]"
      >
        <Send size={14} />
        {siteConfig.email ? "Send a signal" : "Connect on LinkedIn"}
        <ArrowUpRight size={14} />
      </a>
    </motion.div>
  );
}
