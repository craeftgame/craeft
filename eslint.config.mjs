import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintreact from "@eslint-react/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig([
  // files config
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  // eslint-react config
  eslintreact.configs["recommended-typescript"],
  // eslint plugin react with next config
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      js,
      "@next/next: pluginObject": nextPlugin,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "id-length": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // ts eslint config
  tseslint.configs.recommendedTypeChecked,
  // general rules config
  {
    rules: {
      "react/no-array-index-key": "off",
      "react/prefer-read-only-props": "warn",
    },
  },
]);
