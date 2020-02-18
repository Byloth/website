const DYNAMIC_LEVEL = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  root: true,
  env: { node: true },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript/recommended"
  ],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    "arrow-parens": ["error", "always"],
    "brace-style": ["error", "allman", { allowSingleLine: true }],
    "comma-dangle": DYNAMIC_LEVEL,
    "indent": ["error", 4, { MemberExpression: "off" }],
    "lines-between-class-members": "off",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-console": DYNAMIC_LEVEL,
    "no-debugger": DYNAMIC_LEVEL,
    "no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],

    "vue/no-unused-components": DYNAMIC_LEVEL,
    "vue/script-indent": ["error", 4, { baseIndent: 1 }],

    "@typescript-eslint/no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }]
  },
  overrides: [
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "indent": ["error", 2],

        "@typescript-eslint/no-var-requires": "off",
      }
    },
    {
      files: ["*.d.ts"],
      rules: {
        "no-unused-vars": "off",

        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off"
      }
    },
    {
      files: ["*.vue"],
      rules: { indent: "off" }
    }
  ]
};
