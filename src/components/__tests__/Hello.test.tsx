import { render, screen } from "@testing-library/react";
import Hello from "../Hello";

describe("Hello", () => {
  it("renders", () => {
    render(<Hello text="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
