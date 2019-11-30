module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/(src|e2e)/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 58,
      branches: 25,
      functions: 72,
      lines: 58,
    },
  },
};
