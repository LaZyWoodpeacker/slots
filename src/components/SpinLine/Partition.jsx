import React, { useRef, useEffect } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";

export default function Partition({ thickens, position }) {
  const objRef = useRef();

  useEffect(() => {
    // objRef.current.rotation.x = -0.2;
  }, []);

  useFrame((state, delta) => {
    // objRef.current.rotation.x += 0.01;
  });

  return (
    <group position={[position, 0, 0]} ref={objRef}>
      <mesh>
        <boxGeometry args={[thickens, 2, 2]} />
        <meshPhysicalMaterial metalness={1} color={0xffffc0} roughness={0.9} />
      </mesh>
    </group>
  );
}
