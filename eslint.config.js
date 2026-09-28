const eslint = require("@eslint/js");

module.exports = [
  eslint.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
  },
  {
    ignores: ["node_modules/**", "coverage/**"],
  },
];