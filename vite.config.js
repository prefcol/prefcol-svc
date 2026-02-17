// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // ✅ For custom domain (https://prefcol.com)
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  server: {
    proxy: {
      "/api/compile": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/api": { target: "http://localhost:8081", changeOrigin: true },
    },
  },
})
