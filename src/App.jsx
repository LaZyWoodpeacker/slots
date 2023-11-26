import React, {
  useCallback,
  useState,
  useRef,
  Suspense,
  useLayoutEffect
} from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import Loading from './components/Loading'
import SlotMachine from './components/SlotMachine'
import ScoreOverlay from './components/ScoreOverlay'
import WinAnimation from './components/WinAnimation'
import CasinoEnvironment from './components/CasinoEnvironment'
import { getRandomCombination } from './tools/tools'
import { useCoins, applyWin, insertCoin } from './state/game'
import './App.css'

function App() {
  const last = useRef()
  const appRef = useRef()
  const cameraRef = useRef()
  const [line, setLine] = useState([null, null, null])
  const [endSpinAnimation, setEndSpinAnimation] = useState(false)
  const [busy, setBusy] = useState(false)
  const { nodes } = useGLTF('/models/scene.glb')
  const coins = useCoins()

  useLayoutEffect(() => {
    const resize = () => {
      console.log('resize')
      if (window.innerWidth > window.innerHeight) {
        appRef.current.style.width = `${window.innerHeight / 1.777}px`
        appRef.current.style.height = `${window.innerHeight}px`
      } else {
        if (window.innerWidth * 1.777 <= window.innerHeight) {
          appRef.current.style.width = `${window.innerWidth}px`
          appRef.current.style.height = `${window.innerWidth * 1.777}px`
        } else {
          appRef.current.style.width = `${window.innerHeight / 1.777}px`
          appRef.current.style.height = `${window.innerHeight}px`
        }
      }
    }
    resize()
    addEventListener('resize', resize)
    return () => {
      removeEventListener('resize', resize)
    }
  }, [])

  const spin = useCallback(() => {
    insertCoin()
    setBusy(true)
    last.current =
      coins.count === 1 ? getRandomCombination(4) : getRandomCombination()
    setLine([...last.current.set])
  }, [coins])

  const spinReady = useCallback(() => {
    if (last.current.price) {
      applyWin(last.current.price)
      setEndSpinAnimation(true)
    }
    setBusy(false)
  }, [])

  const endAnimation = useCallback(() => {
    setEndSpinAnimation(false)
  }, [])

  return (
    <div ref={appRef}>
      <Suspense fallback={<Loading />}>
        <Canvas shadows>
          <color attach="background" args={['#232323']} />
          <CasinoEnvironment />
          <pointLight
            position={nodes.Light.position}
            intensity={nodes.Light.intensity / 500}
            castShadow
          />
          <WinAnimation
            animation={endSpinAnimation}
            nodes={nodes}
            coins={coins.count}
            set={last.current}
            onEndAnimation={endAnimation}
          />
          <SlotMachine
            busy={busy || endSpinAnimation}
            nodes={nodes}
            set={line}
            OnSpinReady={spinReady}
            OnSpin={spin}
          />
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
          <PerspectiveCamera
            makeDefault
            position={nodes.Camera.position}
            rotation={nodes.Camera.rotation}
            fov={nodes.Camera.fov}
            ref={cameraRef}
            aspect={window.width / window.height}
          />
          {/* <axesHelper args={[15]} /> */}
        </Canvas>
        {/* <ScoreOverlay coins={coins} /> */}
      </Suspense>
    </div>
  )
}

export default App
useGLTF.preload('/models/scene.glb')
