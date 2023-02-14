import { render, screen } from "@testing-library/react";
import Greeting from "../src/components/Greeting";

describe("Greeting", () => {
  it("renders", () => {
    render(<Greeting greeting="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
