module.exports = {
	root: true,
	env: {
		node: true
	},
	// Use vue-standard to format
	extends: ['plugin:json/recommended', 'plugin:vue/essential', '@vue/standard'],

	parserOptions: {
		parser: 'babel-eslint'
	},

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'space-before-function-paren': 0,
		'no-trailing-spaces': ['error', { skipBlankLines: true }],
		semi: [2, 'always'],
		'no-extra-semi': 0,
		'no-tabs': 0,
		indent: [2, 'tab'],

		// https://eslint.vuejs.org/rules/attributes-order.html
		'vue/attributes-order': [
			'error',
			{
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT'
				],
				alphabetical: false
			}
		],

		// https://eslint.vuejs.org/rules/order-in-components.html
		'vue/order-in-components': [
			'error',
			{
				order: [
					'el',
					'name',
					'key',
					'parent',
					'functional',
					['delimiters', 'comments'],
					['components', 'directives', 'filters'],
					'extends',
					'mixins',
					['provide', 'inject'],
					'ROUTER_GUARDS',
					'layout',
					'middleware',
					'validate',
					'scrollToTop',
					'transition',
					'loading',
					'inheritAttrs',
					'model',
					['props', 'propsData'],
					'emits',
					'setup',
					'asyncData',
					'data',
					'fetch',
					'head',
					'computed',
					'watch',
					'watchQuery',
					'LIFECYCLE_HOOKS',
					'methods',
					['template', 'render'],
					'renderError'
				]
			}
		]
	},

	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true
			}
		}
	]
};
