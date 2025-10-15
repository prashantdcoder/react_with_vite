import "@testing-library/jest-dom";
import fs from "fs";

beforeAll(() => {
  const testFile = expect.getState().testPath;
  if (testFile && testFile.endsWith(".test.tsx")) {
    const content = fs.readFileSync(testFile, "utf8");
    if (!content.includes('import React')) {
      throw new Error(`❌ Missing "import React" in test file: ${testFile}`);
    }
  }
});
