import { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import "./Moon.css";

function RotatingMoon() {
  const moonRef = useRef();
  const [baseMap, roughMap, normalMap, heightMap, aoMap] = useLoader(
    TextureLoader,
    [
      "/moon-textures/Rock_041_basecolor.jpg",
      "/moon-textures/Rock_041_roughness.jpg",
      "/moon-textures/Rock_041_normal.jpg",
      "/moon-textures/Rock_041_height.png",
      "/moon-textures/Rock_041_ambientOcclusion.jpg",
    ]
  );

  useFrame(() => {
    moonRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[3, 200, 200]} />
      <meshStandardMaterial
        map={baseMap}
        roughnessMap={roughMap}
        normalMap={normalMap}
        displacementMap={heightMap}
        displacementScale={0.15}
        aoMap={aoMap}
      />
    </mesh>
  );
}

function Moon() {
  return (
    <div id="canvas-container">
      <Canvas>
        <RotatingMoon />
        <directionalLight position={[-10, 5, 5]} intensity={10} color={"rgb(240, 240, 240)"}/>
      </Canvas>
    </div>
  );
}

export default Moon;
