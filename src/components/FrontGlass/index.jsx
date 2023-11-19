import React, { useRef, useEffect } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import glassTexture from "./textures/glasstexture.png";

export default function FrontGlass({ position = [0, 0, 0] }) {
  const objRef = useRef();
  const textureMap = useLoader(TextureLoader, glassTexture);

  useEffect(() => {
    objRef.current.rotation.x = -0.2;
  }, []);

  useFrame((state, delta) => {
    // objRef.current.rotation.x += 0.01;
  });

  return (
    <group position={position} ref={objRef}>
      <mesh>
        <boxGeometry args={[1.5, 0.9, 0.01]} />
        <meshPhysicalMaterial
          transmission={0.99}
          thickness={0}
          roughness={0.05}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.12}
          map={textureMap}
          transparent={true}
        />
      </mesh>
    </group>
  );
}
