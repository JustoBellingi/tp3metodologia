const eslint = require("@eslint/js");

module.exports = [
  eslint.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
    rules: {
      complexity: ["error", 5],
    },
  },

  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
      },
    },
  },

  {
    ignores: ["node_modules/**", "coverage/**"],
  },
];
