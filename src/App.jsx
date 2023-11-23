import React, { useCallback, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  Html
} from '@react-three/drei'
import SpinLine from './components/SpinLine'
import Box from './components/Box'
import Glass from './components/Glass'
import CasinoEnvironment from './components/CasinoEnvironment'
import LeverArm from './components/LeverArm'
import Overlay from './components/Overlay'
import './App.css'

function App() {
  const set = useRef([null, null, null])
  const [line, setLine] = useState(set.current)
  const { nodes } = useGLTF('/models/scene.glb')

  const spin = useCallback(() => {
    const rndNum = () => 1 + Math.floor(Math.random() * 8)
    setLine([rndNum(), rndNum(), rndNum()])
  }, [])

  const spinReady = useCallback(() => {}, [line])

  return (
    <div className="App">
      <Canvas shadows>
        <color attach="background" args={['#232323']} />
        <CasinoEnvironment />
        <pointLight
          position={nodes.Light.position}
          intensity={nodes.Light.intensity / 500}
          castShadow
        />
        <Box position={nodes.Box.position} />
        <SpinLine
          position={nodes.Cylinder.position}
          set={line}
          OnSpinReady={() => spinReady()}
        />
        <Glass position={nodes.Glass.position} />
        <LeverArm objects={nodes} OnSpin={spin} />
        <OrbitControls
          autoRotateSpeed={4}
          target={nodes.Cylinder.position}
          enablePan={false}
          enableZoom={false}
          // minPolarAngle={Math.PI / 2.2}
          // maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.9}
          minAzimuthAngle={Math.PI * 1.95}
          maxAzimuthAngle={-Math.PI * 1.95}
        />
        <axesHelper args={[15]} />
        <PerspectiveCamera
          makeDefault
          position={nodes.Camera.position}
          rotation={nodes.Camera.rotation}
          fov={nodes.Camera.fov}
        />
      </Canvas>
    </div>
  )
}

export default App
