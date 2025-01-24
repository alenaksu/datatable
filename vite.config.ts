import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: true,
    minify: true,
    target: 'modules',
    lib: {
      entry: 'src/index.ts',
      fileName: 'datatable',
      formats: ['es'],
    },
    rollupOptions: {
      treeshake: true,
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [/lit/],
      output: {},
    },
  },
});
