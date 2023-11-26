import React from 'react'
import { BackSide } from 'three'
import { Environment } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

export default function CasinoEnvironment(props) {
  return <Environment preset="forest" blur={0} />
  return (
    <Environment background={false} blur={0}>
      <color attach="background" args={['black']} />
      <mesh rotation={[0, 0, 0]} scale={5}>
        <sphereGeometry />
        <meshBasicMaterial
          transparent
          opacity={0.4}
          map={textureMap}
          side={BackSide}
          toneMapped={false}
        />
      </mesh>
    </Environment>
  )
}
