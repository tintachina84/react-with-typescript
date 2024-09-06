import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // "no-unused-vars": "error",
      // "no-undef": "error",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    ignores: [
      "cypress",
      "node_modules",
      "public",
      "src/assets",
      ".gitignore",
      ".prettierrc",
      ".prettierignore",
      "cypress.config.js",
      "eslint.config.mjs",
    ],
  },
];
