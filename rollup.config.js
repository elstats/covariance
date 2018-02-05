import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import resolve from 'rollup-plugin-node-resolve';
import cjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
    input: './index.js',
    output: {
        format: 'umd',
        file: 'dist/index.js',
        strict: false
    },
    name: 'stats_covariance',
    plugins: [
        babel(babelrc()),
        resolve(),
        cjs(),
        uglify()
    ]
};
