
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import UniverseTransition from "./sections/UniverseTransition";
import DNASection from "./sections/DNASection";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <Hero />
<UniverseTransition />
<DNASection />
<Experience />
<Projects />

    </>
  );
}