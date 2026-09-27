import { MotionConfig } from "framer-motion";
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";
import BootSequence from "./components/BootSequence";
import Hero from "./sections/Hero";
import UniverseTransition from "./sections/UniverseTransition";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BootSequence />
      <CustomCursor />
      <NavBar />
      <main>
        <Hero />
        <UniverseTransition />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </MotionConfig>
  );
}
