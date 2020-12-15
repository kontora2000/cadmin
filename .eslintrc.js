module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always',
      imports: 'always',
      exports: 'never',
      functions: 'never',
    }],
    'no-console': ['warn', { allow: ['error'], }],
  },
}
