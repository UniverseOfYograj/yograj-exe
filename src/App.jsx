import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import UniverseTransition from "./sections/UniverseTransition";
import DNASection from "./sections/DNASection";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import BootSequence from "./components/BootSequence";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <><BootSequence />

      <CustomCursor />
      <NavBar />
      <Hero />
<UniverseTransition />
<DNASection />
<Experience />
<Projects />
<Skills />
<Contact />
<Footer />

    </>
  );
}