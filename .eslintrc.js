module.exports = {
	'env': {
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 11,
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		semi: [2, 'always'],
		indent: ['error', 'tab'],
		quotes: [2, 'single', { 'avoidEscape': true }],
		'space-before-function-paren': 0,
		'no-unused-vars': 0,
		'@typescript-eslint/no-explicit-any': 'off',
	}
};
