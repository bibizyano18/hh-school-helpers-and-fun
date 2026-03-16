import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
