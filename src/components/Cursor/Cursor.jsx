import { useState, useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorPosition = {
    left: position.x,
    top: position.y,
  };

  return <div className="cursor" style={cursorPosition}></div>;
}

export default Cursor;
