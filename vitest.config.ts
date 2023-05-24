/// <reference types="vitest/config" />

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./src/_test-util'],
  },
});
