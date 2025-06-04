import { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import "./Moon.css";

function RotatingMoon() {
  const moonRef = useRef();
  const texture = useLoader(
    TextureLoader,
    "/moon-textures/Rock_041_basecolor.jpg"
  );

  useFrame(() => {
    moonRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[3, 200, 200]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Moon() {
  return (
    <div id="canvas-container">
      <Canvas>
        <RotatingMoon />
        <directionalLight
          position={[-10, 5, 5]}
          intensity={10}
          color={"rgb(240, 240, 240)"}
        />
      </Canvas>
    </div>
  );
}

export default Moon;
