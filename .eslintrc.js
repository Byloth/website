const DYNAMIC_LEVEL = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended"
  ],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    "arrow-parens": ["error", "always"],
    "brace-style": ["error", "allman", { allowSingleLine: true }],
    "comma-dangle": DYNAMIC_LEVEL,
    "indent": ["error", 4, { SwitchCase: 1 }],
    "lines-between-class-members": "off",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-console": DYNAMIC_LEVEL,
    "no-debugger": DYNAMIC_LEVEL,
    "no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }],
    "object-shorthand": ["error", "consistent"],
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
    "@typescript-eslint/no-unused-vars": [DYNAMIC_LEVEL, { args: "none" }],
    "@typescript-eslint/semi": ["error"]
  },
  overrides: [
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "indent": ["error", 2, { SwitchCase: 1 }],

        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["*.json"],
      rules: {
        "indent": ["error", 2],
        "no-unused-expressions": "off",
        "semi": ["error", "never"],
        "@typescript-eslint/semi": ["error", "never"]
      }
    },
    {
      files: ["*.ts"],
      rules: {
        "no-unused-vars": "off",
        "semi": "off"
      }
    },
    {
      files: ["*.d.ts"],
      rules: {
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
