import { useEffect, useRef, useState } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import Coin from './Coin'

export default function WinAnimation({
  nodes,
  animation = false,
  coins,
  set,
  onEndAnimation
}) {
  const { camera, viewport } = useThree()
  const groupRef = useRef()

  useEffect(() => {
    if (animation) {
      setTimeout(onEndAnimation, 500)
    }
  }, [animation])

  useFrame((state) => {
    groupRef.current.position.copy(camera.position)
    groupRef.current.rotation.copy(camera.rotation)
    groupRef.current.translateZ(-5)
  })

  return (
    <group position={[0, 0, 0]} ref={groupRef}>
      <Text
        fontSize={0.4}
        position={[-0.2, 1.35, 0]}
        anchorX="left"
        toneMapped={false}>
        {coins || 0}
        <meshStandardMaterial
          metalness={0.8}
          roughness={0.1}
          color={'yellow'}
        />
      </Text>
      <Text fontSize={0.4} visible={animation && set}>
        {set?.name || 0}
        <meshStandardMaterial metalness={0.8} roughness={0.1} color={'red'} />
      </Text>
      <Coin model={nodes.Coin} position={[-0.5, 1.4, 0]} rotate scale={0.6} />
    </group>
  )
}
