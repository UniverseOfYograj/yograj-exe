import { motion } from "framer-motion";
import { FolderGit2, Network, Mail, ArrowUp } from "lucide-react";
export default function Footer() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-[#010611]">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Branding */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black tracking-tight text-white"
            >
              YOGRAJ
            </motion.h2>

            <p className="mt-3 max-w-sm text-white/60">
              Software Engineer • Java • Spring Boot • React
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <Social icon={FolderGit2} href="https://github.com/UniverseOfYograj" />
<Social icon={Network} href="#" />
<Social icon={Mail} href="mailto:yograj@example.com" />
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="my-10 h-px origin-left bg-gradient-to-r from-cyan-400 via-cyan-300/30 to-transparent"
        />

        {/* Mission Log */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-cyan-400/10 bg-[#04111B]/60 p-6 backdrop-blur-xl"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-xs tracking-[0.28em] text-cyan-200">
              MISSION DEBRIEF
            </span>
          </div>

          <p className="font-mono text-sm leading-7 text-cyan-100">
            &gt; Journey complete.
            <br />
            &gt; Systems initialized.
            <br />
            &gt; New opportunities detected.
            <br />
            &gt; Ready for the next mission.
          </p>
        </motion.div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/8 pt-6 text-sm text-white/45 md:flex-row">
          <p>© 2026 Yograj • Crafted with curiosity, caffeine & countless commits.</p>

          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
          >
            <ArrowUp
              size={16}
              className="transition group-hover:-translate-y-1"
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
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-cyan-400/15 bg-cyan-400/5 p-3 text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
    >
      <Icon size={20} />
    </motion.a>
  );
}