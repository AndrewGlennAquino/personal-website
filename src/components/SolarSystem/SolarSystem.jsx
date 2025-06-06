import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, Float, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import "./SolarSystem.css";

function Planet() {
  const planetRef = useRef();
  const radius = 3;
  const speed = 1.5;

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    planetRef.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });

  return (
    <group>
      <Trail
        width={5}
        length={5}
        color={new THREE.Color(10, 0.5, 5)}
        attenuation={(t) => t}
      >
        <mesh ref={planetRef}>
          <sphereGeometry args={[0.2]} />
          <meshBasicMaterial color={[5, 0.5, 10]} />
        </mesh>
      </Trail>
    </group>
  );
}

function Star() {
  return (
    <group>
      <Planet />
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial color={[5, 0.5, 10]} />
      </Sphere>
    </group>
  );
}

// Canvas container component that wraps animated SolarSystem canvas component
function SolarSystem() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Float speed={4} floatIntensity={1}>
          <Star />
        </Float>
        <EffectComposer>
          <Bloom mipmapBlur radius={0.2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default SolarSystem;
