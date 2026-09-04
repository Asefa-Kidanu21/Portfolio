import Navbar from "./components/Navbar";
import Hero from "./features/Home/Hero";
import About from "./features/About/About";
import Skills from "./features/Skills/Skills";
import Projects from "./features/Projects/Projects";
import Contact from "./features/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;