import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import "./App.css";
import Loading from "./components/Loading/Loading.jsx";
import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";


function App() {
  return (
    <>
      <MouseTrail strokeColor="rgb(240, 240, 240)" />
      <Loading />
      <Stars />
      <Nav />
      <Hero />
      <About />
    </>
  );
}

export default App;
