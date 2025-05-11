export default {
  testEnvironment: "jsdom",
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/main.jsx", // Exclude entry point
  ],
  coverageReporters: ["json", "text", "lcov", "clover"], // Different report formats
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy" // Mock CSS imports
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
