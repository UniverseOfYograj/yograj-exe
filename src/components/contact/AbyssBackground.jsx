import BubbleField from "./BubbleField";
import Kelp from "./Kelp";
import SeaRocks from "./SeaRocks";
import Jellyfish from "./Jellyfish";

export default function AbyssBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Ocean depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#031326] to-[#02111F]" />

      {/* Cyan ambient glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Extra depth */}
      <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-blue-500/5 blur-[90px]" />
      <div className="absolute -right-24 bottom-24 h-64 w-64 rounded-full bg-cyan-400/5 blur-[90px]" />

      {/* Animated elements */}
      <BubbleField />
      <Jellyfish />

      {/* Foreground */}
      <Kelp side="left" />
      <Kelp side="right" />
      <SeaRocks />
    </div>
  );
}