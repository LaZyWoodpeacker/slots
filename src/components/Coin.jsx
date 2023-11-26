import { React, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Coin({ model, position, rotate, scale }) {
  const coinRef = useRef()

  useFrame(() => {
    if (rotate) {
      coinRef.current.rotation.y += 0.1
      coinRef.current.rotation.z += 0.05
    }
  })

  return (
    <group position={position} ref={coinRef}>
      <mesh geometry={model.geometry} scale={scale}>
        <meshStandardMaterial
          metalness={0.7}
          roughness={0.1}
          color={'yellow'}
        />
      </mesh>
    </group>
  )
}
