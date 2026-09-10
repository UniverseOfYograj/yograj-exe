import { motion } from "framer-motion";

export default function TimelineNode({
  title,
  date,
  description,
  icon,
  active,
  index,
}) {
  const isRight = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity:0, y:40 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.6 }}
      className={`relative flex w-full items-center ${
        isRight ? "md:justify-end" : "md:justify-start"
      }`}
    >
      {/* Node */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
        <div className={`flex h-14 w-14 items-center justify-center rounded-full border ${
          active
            ? "border-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.45)]"
            : "border-cyan-400/40"
        } bg-[#07111a]`}>
          {icon}
        </div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y:-6, scale:1.02 }}
        className={`group w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(34,211,238,.15)] md:w-[42%] ${
          isRight ? "md:mr-0" : "md:ml-0"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>

          <span className="text-sm font-medium text-cyan-300 whitespace-nowrap">
            {date}
          </span>
        </div>

        <p className="mt-5 leading-8 text-white/70">
          {description}
        </p>

        {/* hover sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div
            className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent"
            initial={{ x:"-120%" }}
            whileHover={{ x:"240%" }}
            transition={{ duration:0.8 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}