/// <reference types="vitest" />

import {
  defineConfig,
} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts(),
  ],
  test: {
    reporters: [
      'dot',
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      formats: [
        'es',
      ],
      entry: path.resolve(__dirname, 'src/lib'),
      name: 'FormValidator',
      fileName: (format) => `lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        'axios',
        '@vueuse/core',
      ],
    },
  },
});
