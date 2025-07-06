import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es2022,
            },
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        rules: {
            // TypeScript specific rules
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',

            // General rules
            'no-console': 'warn',
            'no-debugger': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'prefer-template': 'error',

            // Import/Export rules
            'no-duplicate-imports': 'error',

            // Code style
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline', // For arrays: [1, 2,]
                    objects: 'always-multiline', // For objects: {a: 1,}
                    imports: 'always-multiline', // For imports: import {a, b,} from '...'
                    exports: 'always-multiline', // For exports: export {a, b,}
                    functions: 'never', // For function params: func(a, b)
                },
            ],
        },
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['node_modules/**', 'dist/**', '*.js', '*.mjs'],
    }
);
