// Efficiently bundles third party dependencies we've installed and use in node_modules
import resolve from '@rollup/plugin-node-resolve';
// Enables transpilation into CommonJS (CJS) format
import commonjs from '@rollup/plugin-commonjs';
// Transpiled our TypeScript code into JavaScript. This plugin will use all the settings we have set in tsconfig.json.
import typescript from '@rollup/plugin-typescript';
// This is a plugin that lets you roll-up your . d. ts definition files.
import dts from 'rollup-plugin-dts';
// Output the size of your bundle
import bundleSize from 'rollup-plugin-bundle-size';
// A Rollup plugin which replaces targeted strings in files while bundling.
import replace from '@rollup/plugin-replace';
// Seamless integration between Rollup and PostCSS
import postcss from 'rollup-plugin-postcss';
// Minify generated es bundle
import { terser } from 'rollup-plugin-terser';
// Automatically add a library's peerDependencies to its bundle's external config
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// Umports JPG, PNG, GIF, SVG, and WebP files
import image from '@rollup/plugin-image';

import packageJson from './package.json';
import tsConfig from './tsconfig.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    onwarn(warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') return;
      warn(warning);
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),

      terser(),
      image(),
      bundleSize(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts.default({
        compilerOptions: {
          baseUrl: tsConfig.compilerOptions.baseUrl,
        },
      }),
      bundleSize(),
    ],

    external: [/\.css$/],
  },
];
