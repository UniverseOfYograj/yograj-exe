
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import UniverseTransition from "./sections/UniverseTransition";

export default function App() {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <Hero />
      <UniverseTransition />
    </>
  );
}