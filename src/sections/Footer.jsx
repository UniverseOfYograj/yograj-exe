import { motion } from "framer-motion";
import { FolderGit2, Network, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-cyan-400/10 bg-[#010611]">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.04),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8">
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-black tracking-tight text-white"
            >
              YOGRAJ
            </motion.h2>

            <p className="mt-1 text-sm text-white/55">
              Software Engineer • Java • Spring Boot • React
            </p>
          </div>

          <div className="flex gap-3">
            <Social
              icon={FolderGit2}
              href="https://github.com/UniverseOfYograj"
            />
            <Social icon={Network} href="#" />
            <Social icon={Mail} href="mailto:yograj@example.com" />
          </div>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/45 md:flex-row">
          <p>© 2026 Yograj • Crafted with curiosity & countless commits.</p>

          <button
            onClick={scrollTop}
            className="group flex items-center gap-1 rounded-full border border-cyan-400/15 px-3 py-1.5 text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/5"
          >
            <ArrowUp
              size={14}
              className="transition group-hover:-translate-y-0.5"
            />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}

function Social({ icon: Icon, href }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-cyan-400/15 bg-cyan-400/5 p-2.5 text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
    >
      <Icon size={18} />
    </motion.a>
  );
}