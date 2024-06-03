// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        cards: resolve(__dirname, 'cards.html'),
      },
    },
  },
});