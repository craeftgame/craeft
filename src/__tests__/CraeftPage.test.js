/* globals it */
import React from "react";
import { createRoot } from "react-dom/client";
import CraeftPage from "../CraeftPage";

it("renders without crashing", () => {
    const root = createRoot(document.createElement("div"));
    root.render(<CraeftPage showFooter={true} />);
    root.unmount();
});
