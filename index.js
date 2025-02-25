module.exports = {
	extends: [
		'stylelint-config-standard-scss',
	],
	'plugins': [
		'stylelint-order',
	],
	'rules': {
		'block-no-empty': true,
		'color-no-invalid-hex': true,
		'comment-no-empty': true,
		'declaration-empty-line-before': 'never',
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'no-duplicate-selectors': true,
		'no-invalid-double-slash-comments': true,
		'property-no-vendor-prefix': [true, { ignoreProperties: ['transform', 'perspective', 'backface-visibility', 'appearance'] }],
		'property-no-unknown': true,
		'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
		'selector-max-id': 0,
		'shorthand-property-no-redundant-values': true,
		'unit-no-unknown': true,
		'value-keyword-case': 'lower',
		'order/properties-alphabetical-order': true,
	},
};
