import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
  // build: {
  //   rollupOptions: {
  //     external: ['three'],
  //     output: {
  //       paths: {
  //         three: 'https://unpkg.com/three@0.158.0/build/three.js'
  //       }
  //     }
  //   }
  // }
})
