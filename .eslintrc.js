const DYNAMIC_LEVEL = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@vue/standard",
    "@vue/typescript/recommended",
    "plugin:vue/recommended"
  ],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    "arrow-parens": ["error", "always"],
    "brace-style": ["error", "allman", { allowSingleLine: true }],
    "comma-dangle": DYNAMIC_LEVEL,
    "indent": ["error", 4],
    "lines-between-class-members": "off",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-console": DYNAMIC_LEVEL,
    "no-debugger": DYNAMIC_LEVEL,
    "no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }],
    "object-shorthand": ["error", "always"],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", { anonymous: "never", named: "never", asyncArrow: "always" }],

    "vue/html-closing-bracket-newline": ["error", { singleline: "never", multiline: "never" }],
    "vue/html-indent": ["error", 4],
    "vue/html-self-closing": ["error", { html: { void: "always", normal: "never" } }],
    "vue/max-attributes-per-line": ["error", { multiline: { max: 1, allowFirstLine: true }, singleline: 2 }],
    "vue/no-unused-components": DYNAMIC_LEVEL,
    "vue/no-unused-vars": DYNAMIC_LEVEL,
    "vue/script-indent": ["error", 4, { baseIndent: 1 }],

    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }]
  },
  overrides: [
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "indent": ["error", 2],

        "@typescript-eslint/no-var-requires": "off"
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
