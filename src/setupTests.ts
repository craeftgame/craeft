// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom";
import crypto from "crypto";
import "@craeft/engine/dist/craeft";

Object.defineProperty(globalThis, "crypto", {
  value: {
    getRandomValues: (arr: string[]) => crypto.randomBytes(arr.length),
  },
});

Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
  writable: true,
});
