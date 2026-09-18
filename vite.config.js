import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        graphicDesign: resolve(import.meta.dirname, 'portfolio/graphic-design/index.html'),
        videography: resolve(import.meta.dirname, 'portfolio/videography/index.html'),
        videoEditing: resolve(import.meta.dirname, 'portfolio/video-editing/index.html'),
        motionGraphics: resolve(import.meta.dirname, 'portfolio/motion-graphics/index.html'),
      },
    },
  },
})