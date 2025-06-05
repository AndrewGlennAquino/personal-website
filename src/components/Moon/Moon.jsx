import { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import "./Moon.css";

// Animated rotating moon built using React Three Fiber
function RotatingMoon() {
  const moonRef = useRef(); // React hook that holds rotation.y value
  const texture = useLoader(
    TextureLoader,
    "/moon-textures/Rock_041_basecolor.jpg"
  );

  // React Three Fiber hook that updates moonRef rotation.y value every frame
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

// Canvas container component that wraps RotatingMoon component
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
