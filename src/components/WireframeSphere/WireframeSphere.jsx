import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./WireframeSphere.css";

// Component that builds and animates a wireframe sphere mesh
function Sphere() {
  // Hold sphere rotation.y value
  const sphereRef = useRef();

  // Continuously increase sphere rotation.y value every frame 
  useFrame(() => {
    sphereRef.current.rotation.y += 0.0025;
  });

  // attach sphereRef to mesh
  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3, 10, 10]} />
      <meshBasicMaterial color="rgb(240, 240, 240)" wireframe />
    </mesh>
  );
}

// Component that creates canvas and adds animated wireframe sphere
function WireframeSphere() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Sphere />
      </Canvas>
    </div>
  );
}

export default WireframeSphere;
