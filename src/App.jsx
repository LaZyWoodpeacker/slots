import { Canvas } from "@react-three/fiber";
import SpinLine from "./components/SpinLine";
import FrontGlass from "./components/FrontGlass";
import Oclusion from "./components/oclusion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{
          fov: 90,
          zoom: 8,
          position: [0, 0, 10],
        }}
      >
        <Oclusion />

        <directionalLight position={[0.7, 0.4, 1]} intensity={0.7} />
        <SpinLine />
        <FrontGlass position={[0, 0, 6]} />
      </Canvas>
    </div>
  );
}

export default App;
