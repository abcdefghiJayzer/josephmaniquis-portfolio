import { useRef } from "react";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="font-poppins">
      <NavBar
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillRef={skillRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <div ref={homeRef}>
        <Home contactRef={contactRef} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
