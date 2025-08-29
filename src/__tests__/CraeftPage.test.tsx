import { render, screen } from "@testing-library/react";
import React from "react";
import CraeftPage from "../components/pages/CraeftPage";

test("renders without crashing", () => {
  render(<CraeftPage />);
  expect(screen.getByText(/go Cräft!/i)).toBeInTheDocument();
});
