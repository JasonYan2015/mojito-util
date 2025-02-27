import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import { DEFAULT_EXTENSIONS } from '@babel/core'

import pkg from './package.json'

const name = `mojito-utils`
const banner =
`/**
 * issues at https://github.com/JasonYan2015/mojito-util/issues
 * ${name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */
`

const extensions = [...DEFAULT_EXTENSIONS, 'ts', 'tsx']
const plugins = [
    postcss({
        inject: false,
        extract: true,
        extensions: ['.css'],
    }),
    json(),
    typescript({
        cacheRoot: `${require('os').tmpdir()}/.rpt2_cache`,
        useTsconfigDeclarationDir: true,
    }),
    eslint({ include: '**/*.js' }),
]

const configMap = {
    esm: {
        file: pkg.module,
        format: 'esm',
    },
    common: {
        file: pkg.main,
        format: 'cjs',
    },
    umdDev: {
        env: 'development',
        file: 'dist/MojitoUtils.umd.js',
        format: 'umd',
    },
    umdProd: {
        env: 'production',
        file: 'dist/MojitoUtils.umd.min.js',
        format: 'umd',
    },
    esmBrowserDev: {
        env: 'development',
        file: 'dist/MojitoUtils.esm.browser.js',
        format: 'esm',
        transpile: false,
    },
    esmBrowserProd: {
        env: 'production',
        file: 'dist/MojitoUtils.esm.browser.min.js',
        format: 'esm',
        transpile: false,
    },
}

const genConfig = (opts) => {
    const isProd = /min\.js$/.test(opts.file)

    const config = {
        input: 'src/index.ts',
        plugins: plugins.slice(),
        output: {
            name: 'MojitoUtils',
            file: opts.file,
            banner,
            format: opts.format,
            exports: 'named',
        },
    }

    if (opts.env) {
        config.plugins.push(replace({
            'process.env.NODE_ENV': JSON.stringify(opts.env),
        }))
    }
    if (opts.transpile !== false) {
        config.plugins.push(babel({ extensions }))
    }

    if (isProd) {
        config.plugins.push(terser({
            output: {
                /* eslint-disable */
                ascii_only: true,
            },
        }))
    }

    return config
}

export default Object.keys(configMap)
    .map(key => configMap[key])
    .map(genConfig)
