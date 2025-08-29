import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
	{
		files: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: {
			react: pluginReact,
		},
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			pluginReact.configs.flat.recommended,
		],
		guageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
];
