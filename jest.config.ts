import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
    "setupFiles": [
        "<rootDir>/jestSetup.js"
      ],
    "testEnvironment": "jsdom"
};

export default createJestConfig(customJestConfig);
