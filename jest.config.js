/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // Use the ESM-friendly preset
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    // '^.+\\.tsx?$': ['ts-jest', { useESM: true }], // This is handled by the preset
  },
  moduleNameMapper: {
    // This mapping is crucial for resolving imports with a '.js' extension
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};