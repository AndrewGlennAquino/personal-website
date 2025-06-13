import MouseTrail from "@pjsalita/react-mouse-trail";
import "./App.css";
import Loading from "./components/Loading/Loading.jsx";
import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Work from "./components/Work/Work.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <MouseTrail color="rgb(240, 240, 240)" />
      {/* <Loading /> */}
      <Stars />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Work />
      <Contact />
    </>
  );
}

export default App;
