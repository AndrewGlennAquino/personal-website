import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import "./SolarSystem.css";

function Planet(props) {
  const planetRef = useRef();
  const radius = 2;
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
    <group {...props}>
      <Trail
        width={3}
        length={5}
        color={new THREE.Color(0.5, 5, 0.5)}
        attenuation={(t) => t}
      >
        <mesh ref={planetRef}>
          <sphereGeometry args={[0.15]} />
          <meshBasicMaterial color={[0.25, 5, 0.25]} />
        </mesh>
      </Trail>
    </group>
  );
}

function Star() {
  return (
    <group>
      <Planet position={[0, 0, 1]} />
      <Sphere args={[0.75, 64, 64]}>
        <meshBasicMaterial color={[2.5, 0.25, 5]} />
      </Sphere>
    </group>
  );
}

// Canvas container component that wraps animated SolarSystem canvas component
function SolarSystem() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <Star />
        <EffectComposer>
          <Bloom mipmapBlur radius={0.25} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default SolarSystem;
