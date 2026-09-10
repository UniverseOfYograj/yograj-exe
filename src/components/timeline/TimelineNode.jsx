import { motion } from "framer-motion";

export default function TimelineNode({
  title,
  date,
  description,
  icon,
  active = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative ml-20 md:ml-28"
    >
      {/* Star */}
      <motion.div
        animate={active ? { scale: [1, 1.25, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -left-[54px] top-6"
      >
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-xl">
          {icon}
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.06)]"
      >
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <h3 className="text-2xl font-bold text-white">{title}</h3>

          <span className="text-cyan-300">{date}</span>
        </div>

        <p className="mt-4 text-white/70 leading-8">{description}</p>
      </motion.div>
    </motion.div>
  );
}