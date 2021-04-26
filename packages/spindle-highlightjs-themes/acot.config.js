module.exports = {
  extends: ['@acot'],
  connection: {
    command: 'yarn serve',
  },
  origin: 'http://localhost:5000',
  paths: ['/', '/?theme=dark'],
  rules: {
    '@acot/wcag/focusable-has-indicator': 'warn',
  },
};
