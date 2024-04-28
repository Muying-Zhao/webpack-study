const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('@rollup/plugin-babel')
const json = require('@rollup/plugin-json')
const { terser } = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const path = require('path')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/muying-rollupvue.min.js')
const outputCjsPath = path.resolve(__dirname, './dist/muying-rollupvue.cjs.min.js')
const outputEsPath = path.resolve(__dirname, './dist/muying-rollupvue.es.min.js')


module.exports = {
    input: inputPath,
    output: [
        {
            file: outputUmdPath,
            format: 'umd',
            name: 'roolupVue',
            globals: {
                'vue': 'Vue'
            }
        },
        {
            file: outputCjsPath,
            format: 'cjs',
            globals: {
                'vue': 'Vue'
            }
        },
        {
            file: outputEsPath,
            format: 'es',
            globals: {
                'vue': 'Vue'
            }
        }
    ],
    plugins: [
        vue(),
        resolve(), //resolve插件帮助Rollup查找并解析node_modules中的模块
        commonjs(),
        babel({
            exclude: 'node_modules/**'// 哪些模块不进行babel编译
        }),
        json(),
        terser(),
        postcss({
            plugins: []
        })
    ],
    external: [
        'vue'
    ]
}
