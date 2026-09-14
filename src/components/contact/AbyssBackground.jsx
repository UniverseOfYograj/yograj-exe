import BubbleField from "./BubbleField";
import Kelp from "./Kelp";
import SeaRocks from "./SeaRocks";
import Jellyfish from "./Jellyfish";
import WaterCaustics from "./WaterCaustics";

export default function AbyssBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#010610] via-[#021120] to-[#01050D]" />

      <WaterCaustics />
      <BubbleField />
      <Jellyfish />
      <Kelp />
      <SeaRocks />

      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[140px]" />
    </div>
  );
}