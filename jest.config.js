module.exports = {
  preset: 'ts-jest', // Use ts-jest for handling TypeScript files
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for testing environment
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest', // Use babel-jest for TS/TSX files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Handle TS/JS/JSX/TSX extensions
};
