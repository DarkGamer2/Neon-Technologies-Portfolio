import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,  // Railway needs to use a dynamic port
  },
  build: {
    outDir: 'dist',  // This is where your production files will be built
  },
});
