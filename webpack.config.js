const path = require('path');
const zlib = require('browserify-zlib');
const crypto = require('crypto-browserify');
const stream = require('stream-browserify');
const querystring = require('querystring-es3');
const util = require('util');

module.exports = {
    mode: 'development', // o 'production'
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      // Agrega aquí otros módulos que necesites
            fs: false, // No puedes usar 'fs' en el navegador
            path: require.resolve('path-browserify'), // Polyfill para 'path'
            zlib: require.resolve("browserify-zlib"),
            querystring: require.resolve("querystring-es3"),
            
            crypto: require.resolve("crypto-browserify"),
            fs: false,
            stream: require.resolve("stream-browserify"),
            http: require.resolve("stream-http"),
            net: false,
            util: require.resolve("util"),
          },
        
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },
    devtool: 'source-map', // Facilita la depuración en modo de desarrollo
};

