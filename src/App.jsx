import { Canvas } from "@react-three/fiber";
import OneSpin from "./components/OneSpin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{
          fov: 75,
          position: [0, 0, 3],
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <OneSpin set={[5, 4]} animationSpeed={1000} />
      </Canvas>
    </div>
  );
}

export default App;
