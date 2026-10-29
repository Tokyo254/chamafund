# React + TypeScript + Vite

## About

This repository currently contains a lightweight React/Vite scaffold. Add ChamaFund’s product workflows and user features here as they are implemented; the current code does not yet document those features.

## React Compiler


The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.


Note: This will impact Vite dev & build performances.


## Expanding the ESLint configuration


If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:


```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...


      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,


      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:
