const { resolve, dirname } = require('path');

module.exports = {
  entry: './esm/index.js',
  output: {
    filename: 'index.js',
    path: resolve(dirname(__filename), 'commonjs'),
    hashFunction: 'sha256',
    library: { name: 'DxfParser', type: 'umd', export: 'DxfParser' },
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  mode: 'production'
};
