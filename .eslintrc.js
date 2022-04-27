module.exports = {
  env: {
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended,next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "typescript.suggestionActions.enabled": 0,
    "javascript.suggestionActions.enabled": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-return-await": 2,
    curly: 0,
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": 0,
    "no-unused-vars": 0,
  },
};
