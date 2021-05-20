const pkg = require('./package.json');

export default {
    input: 'index.js',
    output: [
        { file: 'dist/index.js', format: 'es' },
        { file: 'dist/index.mjs', format: 'umd', name: 'Theme' }
    ],
};