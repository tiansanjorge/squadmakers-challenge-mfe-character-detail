import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./CharacterDetail": "./src/components/CharacterDetail.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    rollupOptions: {
      input: "./index.html",
    },
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    modulePreload: false,
  },
});
