// vite.config.ts

/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { defineConfig } from 'vite';
import typescript2 from "rollup-plugin-typescript2";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'arabic',
      fileName: (format) => `arabic.${format}.js`,
    },
  },
  plugins: [
    typescript2({
      check: false,
      include: [],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: [
          "test",
          "vite.config.ts",
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    // ...
  },
});