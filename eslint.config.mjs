import { defineConfig } from "eslint/config";
import globals from "globals";
import parser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import flowType from "eslint-plugin-flowtype";
import jest from "eslint-plugin-jest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: fixupConfigRules(
      compat.extends([
        "eslint:recommended",
        "react-app",
        "plugin:jest/recommended",
      ]),
    ),

    plugins: {
      flowtype: fixupPluginRules(flowType),
      jest,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser,
      ecmaVersion: 6,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
          experimentalObjectRestSpread: true,
        },
      },
    },

    settings: {
      react: {
        pragma: "React",
        version: "19.1.1",
      },
    },

    rules: {
      quotes: ["error", "double"],
      "no-console": "warn",
    },
  },
]);
