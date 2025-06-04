import MouseTrail from "@pjsalita/react-mouse-trail";
import "./App.css";
import Loading from "./components/Loading/Loading.jsx";
import Stars from "./components/Stars/Stars.jsx";
import Moon from "./components/Moon/Moon.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";


function App() {
  return (
    <>
      <MouseTrail color="rgb(240, 240, 240)" />
      <Loading />
      <Stars />
      <Nav />
      <Hero />
      <About />
    </>
  );
}

export default App;
