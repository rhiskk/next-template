import Home from "..";
import { render, screen } from "@testing-library/react";

describe("Index", () => {
  it("renders", () => {
    render(<Home />);
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
