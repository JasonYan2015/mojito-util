module.exports = {
    root: true,
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true,
    },
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        semi: 'off',
        'promise/param-names': 'off',

        indent: ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],

        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': ['warn', {
            ignoreRestArgs: true,
        }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: { delimiter: 'none' },
            singleline: { delimiter: 'comma' },
        }],
    },
}
