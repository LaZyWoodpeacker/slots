import React, { useRef } from 'react'
import { useGLTF, AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const reverseVector = (vector) => [vector.x, vector.z, vector.y]

export default function Box(props) {
  const { nodes, materials } = useGLTF('/models/scene.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow dropShadow geometry={nodes.Box.geometry}>
        <meshStandardMaterial metalness={1} roughness={0.1} />
      </mesh>
    </group>
  )
}
