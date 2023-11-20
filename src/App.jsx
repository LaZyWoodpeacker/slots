import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

import SpinLine from './components/SpinLine'
import Box from './components/Box'
import Glass from './components/Glass'
import CasinoEnvironment from './components/CasinoEnvironment'
import './App.css'

function App() {
  const { nodes } = useGLTF('/models/scene.glb')
  return (
    <div className="App">
      <Canvas
        shadows
        camera={{
          fov: nodes.Camera.fov,
          position: nodes.Camera.position
        }}>
        {/* <CasinoEnvironment /> */}

        {/* <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
          <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
        </AccumulativeShadows> */}

        <pointLight
          position={nodes.Light.position}
          intensity={nodes.Light.intensity / 500}
          // castShadow
        />
        <Box position={nodes.Box.position} />
        <SpinLine position={nodes.Cylinder.position} />
        <Glass position={nodes.Glass.position} />
        <OrbitControls target={[nodes.Box.position.x, nodes.Box.position.y, nodes.Box.position.z + 2]} />
        <axesHelper args={[15]} />
      </Canvas>
    </div>
  )
}

export default App
