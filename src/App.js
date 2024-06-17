import "./App.css";
import Header from "./components/navbar";
import Herosection from "./components/hero-section";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import { AnimatePresence } from "framer-motion";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <AnimatePresence initial={false} mode="wait">
        <main
          className="App"
          style={{
            padding: "20px",
            margin: "10px",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Herosection />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
