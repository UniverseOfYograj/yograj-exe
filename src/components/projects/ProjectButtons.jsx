import { GitBranch, ArrowUpRight } from "lucide-react";

export default function ProjectButtons({ github, live }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full border border-cyan-400/20 px-3 py-2 text-xs text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
      >
        <GitBranch className="h-4 w-4" />
        GitHub
      </a>

      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-2 text-xs text-black transition hover:bg-cyan-300"
      >
        Live
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}