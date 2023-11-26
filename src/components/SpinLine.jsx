import React, { useRef, useState, useMemo } from 'react'
import OneSpin from './OneSpin'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from '../textures/mainspinNumbers.png'

export default function SpinLine({
  set = [null, null, null],
  rounds = 8,
  firstAnimationTime = 1000,
  timesBetween = 500,
  position,
  cylinderModel,
  OnSpinReady
}) {
  const textureMap = useLoader(TextureLoader, texture)
  textureMap.flipY = false

  const [left, middle, right] = useMemo(
    () => [
      [set[0], rounds],
      [set[1], rounds],
      [set[2], rounds]
    ],
    [set]
  )

  const positions = useMemo(
    () => ({
      left: [-1.05, 0, 0],
      middle: [0, 0, 0],
      right: [1.05, 0, 0]
    }),
    []
  )

  return (
    <group position={position}>
      <OneSpin
        set={left}
        model={cylinderModel}
        animationSpeed={firstAnimationTime}
        position={positions.left}
        textureMap={textureMap}
      />
      <OneSpin
        model={cylinderModel}
        set={middle}
        position={positions.middle}
        animationSpeed={firstAnimationTime + timesBetween}
        textureMap={textureMap}
      />
      <OneSpin
        debug
        model={cylinderModel}
        set={right}
        position={positions.right}
        animationSpeed={firstAnimationTime + timesBetween * 2}
        onReady={OnSpinReady}
        textureMap={textureMap}
      />
    </group>
  )
}
