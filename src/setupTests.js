// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom";
import crypto from "crypto";

window.crypto = {
    getRandomValues: function (buffer) {
        return crypto.randomFillSync(buffer);
    },
};
