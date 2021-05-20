import typescript from '@rollup/plugin-typescript';

const pkg = require('./package.json');

export default {
  input: 'index.ts',
  output: [
    { file: 'dist/index.js', sourcemap: true, format: 'es' },
    { file: 'dist/index.umd.js', sourcemap: true, format: 'umd', name: 'rendikit-theme' }
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    })
  ]
};