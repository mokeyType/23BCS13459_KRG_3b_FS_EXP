import { render } from "@testing-library/react";
import greetings from "./greetings";

// snapshot test
test("renders Greetings", () => {
  const { container } = render(<greetings name="john" />);
    expect(container).toMatchSnapshot();
});