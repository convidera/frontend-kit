/// <reference types="vitest" />

import {
  defineConfig,
} from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: path.resolve(__dirname, './src'),
    }),
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
      name: 'Utils',
      fileName: (format) => `lib.${format}.js`,
    },
  },
});
