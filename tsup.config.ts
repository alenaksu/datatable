import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    datatable: 'src/index.ts',
  },
  outDir: 'dist',
  clean: true,
  dts: true,
  target: 'es2020',
  format: ['esm'],
});
