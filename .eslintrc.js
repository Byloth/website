module.exports = {
  root: true,
  extends: [
    "@byloth/eslint-config-typescript",
    "@byloth/eslint-config-vue"
  ],
  overrides: [
    {
      files: ["*.ts"],
      rules: { "no-unused-vars": "off" }
    },
    {
      files: ["*.json"],
      rules: { "max-len": "off" }
    }
  ]
};
