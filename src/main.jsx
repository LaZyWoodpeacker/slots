import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/models/scene.glb')

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
