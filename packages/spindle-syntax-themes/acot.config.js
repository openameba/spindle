module.exports = {
  extends: ['@acot'],
  connection: {
    command: 'yarn serve',
  },
  origin: 'http://localhost:5001',
  paths: ['/', '/?theme=dark'],
  rules: {
    '@acot/wcag/focusable-has-indicator': 'warn',
  },
};
