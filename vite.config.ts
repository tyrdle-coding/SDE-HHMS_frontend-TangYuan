import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: path.resolve(__dirname),
<<<<<<< HEAD

=======
>>>>>>> 894e3de (update)
  plugins: [react(), tailwindcss()],

  server: {
    host: '0.0.0.0',
    port: 5173,
<<<<<<< HEAD
=======
    allowedHosts: [
      'sdehotelmanagementsystemtangyuan-production.up.railway.app',
    ],
>>>>>>> 894e3de (update)
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },

  preview: {
    host: '0.0.0.0',
<<<<<<< HEAD
    port: Number(process.env.PORT) || 8080,
=======
    port: 5173,
>>>>>>> 894e3de (update)
    allowedHosts: [
      'sdehotelmanagementsystemtangyuan-production.up.railway.app',
    ],
  },

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});