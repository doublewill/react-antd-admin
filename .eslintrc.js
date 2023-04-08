module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // enable additional rules
    semi: ['error', 'always'],

    // override default options for rules from base configurations
    'no-cond-assign': ['error', 'always'],

    // disable rules from base configurations
    'no-console': 'off',
    'no-unused-vars': 1,
  },
};
