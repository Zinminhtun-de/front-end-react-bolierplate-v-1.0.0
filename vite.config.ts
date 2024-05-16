/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import macrosPlugin from "vite-plugin-babel-macros"
import path from "path";
import url from "url";



// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias:{
      '@': path.resolve(__dirname, 'src'),
    }
    
  },

  plugins: [macrosPlugin(),  react({ fastRefresh: false })],
  worker: {
    plugins: [react()],
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  }
})
