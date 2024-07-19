module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
        commonjs: true,
    },
    extends: ['airbnb-base', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2018,
        sourceType: 'module',
        babelOptions: {
            presets: ['@babel/preset-env'],
        },
    },
    plugins: ['import'],
    rules: {
        'linebreak-style': [0, 'error', 'windows'],
        'no-console': 'off',
        'max-len': [
            'error',
            {
                comments: 300,
                ignoreStrings: true,
                ignoreUrls: true,
                code: 120,
            },
        ],
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        'import/extensions': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-unused-vars': 'warn',
        'import/prefer-default-export': 'off',
    },
};
