import { GitBranch, ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectButtons({ github, live }) {
  return (
    <div className="mt-6 flex gap-3">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-5 py-2 text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
      >
        <GitBranch className="h-5 w-5" />
        GitHub
      </a>

      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-black transition hover:bg-cyan-300"
      >
        Live Demo
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>
    </div>
  );
}