import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000,         // Set the dev server port to 3000
  //   strictPort: true,   // Optional: Exits if the port is already in use
  // }
})
