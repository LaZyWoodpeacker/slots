import React, { useRef } from 'react'
import {
  useGLTF,
  AccumulativeShadows,
  RandomizedLight
} from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from '../textures/metal.png'
import normals from '../textures/metalMap.png'

export default function Box(props) {
  const { nodes } = useGLTF('/models/scene.glb')
  const textureMap = useLoader(TextureLoader, texture)
  const normalsMap = useLoader(TextureLoader, normals)
  textureMap.flipY = false
  normalsMap.flipY = false

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        dropShadow
        geometry={nodes.Box.geometry}
        bumpMap={normals}>
        <meshStandardMaterial
          metalness={0.8}
          roughness={0.1}
          map={textureMap}
          normalMap={normalsMap}
        />
      </mesh>
    </group>
  )
}
