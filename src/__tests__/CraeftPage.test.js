/* globals it */
import React from "react";
import { render, screen } from "@testing-library/react";
import CraeftPage from "../CraeftPage";

it("renders without crashing", () => {
    render(<CraeftPage showFooter={true} />);
    expect(screen.getByText("Cräft!")).toBeInTheDocument();
});
