import { render, screen } from "@testing-library/react";
import Greeting from "../Greeting";

describe("Greeting", () => {
  it("renders", () => {
    render(<Greeting text="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
