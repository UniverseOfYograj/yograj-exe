import { useState } from "react";
import { Mail, GitBranch, Globe, Send } from "lucide-react";
import { motion } from "framer-motion";
import SonarPulse from "./SonarPulse";

export default function CommunicationTerminal() {
  const [sent, setSent] = useState(false);

  const handleSignal = () => {
    setSent(true);
    setTimeout(() => setSent(false), 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative mx-auto w-full max-w-[360px] overflow-hidden border border-cyan-400/20 bg-[#03111C]/90 p-4 backdrop-blur-xl sm:max-w-[400px] sm:p-5 lg:max-w-[430px] lg:p-6"
      style={{
        borderRadius: "24px 30px 24px 34px",
        boxShadow:
          "0 0 36px rgba(18,110,170,.12), inset 0 0 0 1px rgba(34,211,238,.05)",
      }}
    >
      {/* PDA Scan Strip */}
      <div className="absolute left-0 top-8 h-20 w-[3px] rounded-full bg-cyan-400" />

      <motion.div
        className="absolute left-0 top-8 h-7 w-[3px] rounded-full bg-cyan-200"
        animate={{ y: [0, 52, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Status */}
      <div className="absolute right-4 top-4 flex items-center gap-2 text-[10px] tracking-wide text-cyan-300 sm:text-xs">
        <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        ONLINE
      </div>

      {/* Amber Accent */}
      <div className="absolute bottom-8 right-0 h-12 w-[2px] rounded-full bg-amber-300/70" />

      {/* Header */}
      <div className="mb-3">
        <span className="text-[10px] tracking-[0.24em] text-cyan-200">
          COMMUNICATION TERMINAL
        </span>
      </div>

      {/* Title */}
      <h2 className="text-[24px] font-black leading-[1.05] text-white sm:text-[28px] lg:text-[32px]">
        Let's Build
        <br />
        <span className="text-cyan-300">Something</span>
        <br />
        Together
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-[260px] text-[12px] leading-5 text-white/65 sm:text-[13px]">
        Whether it's software engineering, Java backend, React interfaces or an
        ambitious new idea—I'm always open to meaningful conversations.
      </p>

      {/* Contact Rows */}
      <div className="mt-4 space-y-2">
        <Info icon={Mail} text="yograj@example.com" action="SEND MAIL" />
        <Info icon={GitBranch} text="UniverseOfYograj" action="VIEW GITHUB" />
        <Info icon={Globe} text="LinkedIn Profile" action="CONNECT" />
      </div>

      {/* Signal Strength */}
      <div className="relative mt-4 overflow-hidden rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-3">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ x: ["-120%", "120%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative mb-2 flex justify-between text-xs sm:text-sm">
          <span className="tracking-[0.18em] text-cyan-200">
            SIGNAL STRENGTH
          </span>

          <span className="font-semibold text-white">98%</span>
        </div>

        <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "98%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-300"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="relative mt-5 inline-block">
        <button
          onClick={handleSignal}
          className="group relative flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-[13px] font-semibold text-amber-200 transition hover:scale-[1.03] hover:bg-amber-400/15 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <Send size={16} />

          {sent ? "Signal Sent" : "Send Signal"}

          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            →
          </motion.span>
        </button>

        {sent && <SonarPulse />}
      </div>

      {sent && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-[10px] tracking-[0.22em] text-cyan-200 sm:text-xs"
        >
          CONNECTION ESTABLISHED
        </motion.p>
      )}
    </motion.div>
  );
}

function Info({ icon: Icon, text, action }) {
  return (
    <div className="group flex items-center justify-between rounded-xl border border-cyan-400/15 bg-[#07131E]/70 px-3 py-2.5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.04]">
      <div className="flex items-center gap-3">
        <Icon size={17} className="text-cyan-300" />
        <span className="text-[13px] text-white/90 sm:text-sm">{text}</span>
      </div>

      <div className="hidden items-center gap-2 text-[10px] tracking-wide text-cyan-300 sm:flex">
        {action}

        <motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
        >
          →
        </motion.span>
      </div>
    </div>
  );
}