import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { easings, useSpringValue } from '@react-spring/three'

export default function OneSpin({
  set = [0, 0],
  animationSpeed = 1000,
  position = [0, 0, 0],
  model,
  variants = 8,
  textureMap,
  onReady = () => {}
}) {
  const objRef = useRef()
  const restFunction = useRef()
  const onePosition = (Math.PI * 2) / variants

  const rotate = useSpringValue(0, {
    config: { duration: animationSpeed, easing: easings.easeInOutSine },
    onRest: () => restFunction.current()
  })

  useEffect(() => {
    objRef.current.rotation.x = -onePosition / 2
  }, [])

  useEffect(() => {
    if (set && set.length && set[0]) {
      restFunction.current = onReady
      rotate.reset()
      rotate.start(
        (set[0] - 1) * -onePosition + Math.PI * 2 * set[1] - onePosition / 2
      )
    }
  }, [set])

  useFrame((state, delta) => {
    if (!rotate.idle) {
      objRef.current.rotation.x = rotate.animation.values[0]._value
    }
  })

  return (
    <group ref={objRef}>
      <mesh castShadow dropShadow geometry={model.geometry} position={position}>
        <meshStandardMaterial map={textureMap} />
      </mesh>
    </group>
  )
}
