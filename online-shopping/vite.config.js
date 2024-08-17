// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shopping1/', // Update with your repository name
  plugins: [react()]
});
