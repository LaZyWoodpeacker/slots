import React, { useRef, useState } from 'react'
import { subfromvector } from '../tools/tools'
import { useFrame } from '@react-three/fiber'
import { useSpring, easings } from '@react-spring/three'
import {
  Selection,
  Select,
  EffectComposer,
  Outline
} from '@react-three/postprocessing'

export default function LeverArm(props) {
  const objects = props.objects
  const groupRef = useRef()
  const [hovered, hover] = useState(null)
  const [spinning, setSpinning] = useState(false)
  const pivot = objects.LeverArm.position.toArray()

  const springProps = useSpring({
    config: { duration: 500, easing: easings.easeInOutSine },
    reverse: true,
    to: {
      rotation: 1.57
    },
    from: {
      rotation: 0
    },
    onRest: () => {
      setSpinning(false)
    }
  })

  const onSpin = () => {
    if (!(spinning || props.busy)) {
      setSpinning(true)
      props.OnSpin()
    }
  }

  useFrame((state, delta) => {
    if (spinning || props.busy) {
      groupRef.current.rotation.x =
        springProps.rotation.animation.values[0]._value
    } else {
      springProps.rotation.reset()
    }
  })

  const LeverArmObj = (props) => {
    const { name, children } = props
    const model = objects[name]
    return (
      <Select enabled={hovered}>
        <mesh
          {...props}
          geometry={model.geometry}
          position={subfromvector(model.position, pivot)}>
          {children}
        </mesh>
      </Select>
    )
  }

  return (
    <Selection>
      <EffectComposer multisampling={8} autoClear={false}>
        <Outline
          blur
          visibleEdgeColor="white"
          edgeStrength={1000}
          width={1000}
          xRay={false}
        />
      </EffectComposer>
      <group
        {...props}
        dispose={null}
        position={pivot}
        ref={groupRef}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onPointerUp={onSpin}>
        <LeverArmObj name="LeverArm">
          <meshStandardMaterial metalness={1} roughness={0.1} />
        </LeverArmObj>
        <LeverArmObj name="Knob">
          <meshStandardMaterial
            metalness={0.1}
            roughness={0.7}
            color={'black'}
          />
        </LeverArmObj>
      </group>
    </Selection>
  )
}
