import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
        "react/jsx-filename-extensions": [1, { "extension": [".js", ".jsx"] }]
    }
  },
  pluginReact.configs.flat.recommended,

]);
