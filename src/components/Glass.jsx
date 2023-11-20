import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Glass(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb");
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Glass.geometry}>
        <meshPhysicalMaterial
          color={materials.glass.color}
          transmission={0.978}
          thickness={0.1}
          roughness={0.05}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          normalScale={1}
          clearcoatNormalScale={0.3}
        />
      </mesh>
    </group>
  );
}
