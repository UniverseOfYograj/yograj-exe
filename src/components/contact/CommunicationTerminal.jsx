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
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[#05131F]/85 p-8 backdrop-blur-xl"
    >
      <div className="absolute right-8 top-8 h-3 w-3 animate-pulse rounded-full bg-cyan-400" />

      <span className="text-xs tracking-[0.28em] text-cyan-200">
        COMMUNICATION TERMINAL
      </span>

      <h2 className="mt-4 text-4xl font-black text-white">
        Let's Build Something Together
      </h2>

      <p className="mt-4 max-w-md leading-relaxed text-white/65">
        Whether it's software engineering, Java backend, React interfaces or an
        ambitious new idea—I'm always open to meaningful conversations.
      </p>

      <div className="mt-8 space-y-3">
        <Info icon={Mail} text="yograj@example.com" />
        <Info icon={GitBranch} text="UniverseOfYograj" />
        <Info icon={Globe} text="LinkedIn Profile" />
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-white/70">Signal Strength</span>
          <span className="font-semibold text-cyan-200">98%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "98%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-full rounded-full bg-cyan-400"
          />
        </div>
      </div>

      <div className="relative mt-8 inline-block">
        <button
          onClick={handleSignal}
          className="relative flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          <Send size={18} />
          {sent ? "Signal Sent" : "Send Signal"}
        </button>

        {sent && <SonarPulse />}
      </div>

      {sent && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-cyan-200"
        >
          CONNECTION ESTABLISHED
        </motion.p>
      )}
    </motion.div>
  );
}

function Info({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-cyan-400/30">
      <Icon size={18} className="text-cyan-300" />
      <span className="text-white/80">{text}</span>
    </div>
  );
}