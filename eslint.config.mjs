import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: [
      { js },
      "react-hooks",
    ],
    extends: [
      "js/recommended",
      "plugin:react-hooks/recommended",
    ],
    languageOptions: { globals: globals.browser },
    rules: {
        "react/jsx-filename-extensions": [1, { "extension": [".js", ".jsx"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "import/no-anonymous-default-export": "off",

    }
  },
  pluginReact.configs.flat.recommended,

]);
