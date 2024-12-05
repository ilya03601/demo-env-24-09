import globals from "globals";
import pluginJs from "@eslint/js";

import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...compat.extends("eslint-config-airbnb-base"),
  {
    rules: {
      'import/prefer-default-export': 'off',
      'import/extensions': 'off'
    }
  },
  {
    ignores: ['eslint.config.mjs']
  }
];