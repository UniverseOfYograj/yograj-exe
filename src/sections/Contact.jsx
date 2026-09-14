import AbyssBackground from "../components/contact/AbyssBackground";
import CommunicationTerminal from "../components/contact/CommunicationTerminal";
import DepthMeter from "../components/contact/DepthMeter";
import AbyssScene from "../components/contact/AbyssScene";
import WhaleEasterEgg from "../components/contact/WhaleEasterEgg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020814] py-28"
    >
      <AbyssBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Only one depth meter */}
        <div className="hidden lg:block">
  <DepthMeter />
</div>
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
          {/* Left cinematic scene */}
          <div className="hidden lg:block">
            <AbyssScene />
          </div>

          {/* Right communication terminal */}
          <CommunicationTerminal />
          <div className="mt-5 lg:hidden">
  <div className="rounded-2xl border border-cyan-400/15 bg-[#04111B]/80 p-4 backdrop-blur-xl">
    <div className="mb-2 flex justify-between text-xs tracking-[0.25em] text-cyan-200">
      <span>DEPTH</span>
      <span>984m</span>
    </div>

    <div className="h-1.5 rounded-full bg-white/10">
      <div className="h-full w-[92%] rounded-full bg-cyan-400" />
    </div>
  </div>
</div>
           <WhaleEasterEgg />
        </div>
      </div>
    </section>
  );
}