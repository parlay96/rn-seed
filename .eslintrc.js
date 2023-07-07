module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0, // 内联样式
    '@typescript-eslint/no-shadow': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'no-use-before-define': 0,
    semi: ['error', 'never'], // 分号
    eqeqeq: 0, // === 关闭
  },
}
