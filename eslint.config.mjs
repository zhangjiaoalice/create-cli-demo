import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
    ],
    files: ['**/*.ts'],
    ignores: ['*.js', 'node_modules', '**/dist/**'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
    languageOptions: {
        parser: tseslint.parser,
        globals: {
            ...globals.node,
        },
        parserOptions: {
            // 有哪些子包是你的项目
            project: ['./tsconfig.json', '**/*/tsconfig.json'],
            // tsconfig.json 的根目录
            tsconfigRootDir: import.meta.dirname,
        },
    }
})
