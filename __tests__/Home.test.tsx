import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home", () => {
  it("renders", () => {
    render(<Home />);
    expect(screen.getByText("Hello World")).toBeDefined();
  });
});
