import "./App.css";
import Loading from "./components/Loading/Loading.jsx";
import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <>
      <Loading />
      <Stars />
      <Nav />
      <Hero />
      <About />
    </>
  );
}

export default App;
