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
        <DepthMeter />

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          {/* Left cinematic scene */}
          <div className="hidden lg:block">
            <AbyssScene />
          </div>

          {/* Right communication terminal */}
          <CommunicationTerminal />
           <WhaleEasterEgg />
        </div>
      </div>
    </section>
  );
}