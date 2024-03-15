module.exports = {
    moduleFileExtensions: ['js', 'mjs'],
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
    // Indicates which environment Jest should use
    testEnvironment: 'node',
  
    // Specifies the directory Jest should scan for tests
    roots: ['<rootDir>/tests'],
  
    // Indicates which files Jest should scan for tests
    testMatch: ['**/*.test.js'],
  
    // Specifies transformations to be applied to certain files
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  
    // Other Jest configuration options...
  };