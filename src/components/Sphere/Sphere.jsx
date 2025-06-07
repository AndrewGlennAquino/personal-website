import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import "./Sphere.css";

function RotatingSphere() {
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.y += 0.0025;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3, 10, 10]} />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  );
}

function Sphere() {
  return (
    <div id="canvas-container">
      <Canvas>
        <RotatingSphere />
      </Canvas>
    </div>
  );
}

export default Sphere;
