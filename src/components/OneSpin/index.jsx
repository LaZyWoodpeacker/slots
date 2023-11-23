import React, { useEffect, useRef, useState } from 'react'
import { normalize } from './tools'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useSpring, easings, useSpringValue } from '@react-spring/three'
import texture from './textures/mainspin.png'

export default function OneSpin({
  set = [0, 0],
  animationSpeed = 1000,
  position = [0, 0, 0],
  onReady = () => {}
}) {
  const objRef = useRef()
  const textureMap = useLoader(TextureLoader, texture)
  const restFunction = useRef()

  const rotate = useSpringValue(0, {
    config: { duration: animationSpeed, easing: easings.easeInOutSine },
    onRest: () => restFunction.current()
  })

  useEffect(() => {
    if (set && set.length && set[0]) {
      restFunction.current = onReady
      rotate.reset()
      rotate.start(normalize(set[0]) + Math.PI * 2 * set[1])
    }
  }, [set])

  useEffect(() => {
    objRef.current.rotation.z = Math.PI / 2
  }, [])

  useFrame((state, delta) => {
    if (!rotate.idle) {
      objRef.current.rotation.x = rotate.animation.values[0]._value
    }
  })

  return (
    <group ref={objRef}>
      <mesh position={position}>
        <cylinderGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial map={textureMap} />
      </mesh>
    </group>
  )
}
