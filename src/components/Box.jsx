import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const reverseVector = (vector) => [vector.x, vector.z, vector.y];

export default function Box(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow dropShadow geometry={nodes.Box.geometry}>
        <meshPhysicalMaterial
          metalness={1}
          roughness={0.5}
          color={materials.metal.color}
        />
      </mesh>
    </group>
  );
}
