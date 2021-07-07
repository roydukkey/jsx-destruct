import license from 'rollup-plugin-license';
import typescript from 'rollup-plugin-ts';
import { author, main, module, name, repository, version } from './package.json';


const input = './src/index.ts';

const commonOutput = {
	exports: 'default'
};

const commonPlugins = [
	license({
		banner: {
			commentStyle: 'none',
			content: `/*! ${
				[
					`${name} v${version}`,
					`(c) ${author}`,
					repository.url.replace('.git', `/blob/v${version}/LICENSE`)
				].join(' | ')
			} */`
		}
	})
];


export default [
	{
		input,
		output: {
			...commonOutput,
			file: module,
			format: 'es'
		},
		plugins: [
			typescript({
				transpiler: 'babel'
			}),
			...commonPlugins
		]
	},
	{
		input,
		output: {
			...commonOutput,
			file: main,
			format: 'cjs'
		},
		plugins: [
			typescript({
				transpiler: 'babel',
				tsconfig: (config) => ({
					...config,
					declaration: false
				})
			}),
			...commonPlugins
		]
	}
];
