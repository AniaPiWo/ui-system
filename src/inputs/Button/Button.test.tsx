import { render } from "@testing-library/react";
import * as React from "react";
import { Button } from "./Button";

test("should render Button component properly", () => {
  const { getByText } = render(<Button onClick={() => {}}>Click me</Button>);
  const buttonElement = getByText("Click me");

  expect(buttonElement).toBeInTheDocument();
});
