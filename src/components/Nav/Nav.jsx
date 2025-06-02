import { useState } from "react";
import "./Nav.css";

function Nav() {
  // Holds state of hamburger menu button click
  const [clicked, setClicked] = useState(false);

  // Function that handles hamburger-menu click
  function handleClick() {
    setClicked(!clicked);
    console.log(clicked);
  }

  return (
    <nav className="nav-container">
      <button className={clicked ? "hamburger-menu open" : "hamburger-menu"} onClick={handleClick}>
        <div className="stack"></div>
      </button>
    </nav>
  );
}

export default Nav;
