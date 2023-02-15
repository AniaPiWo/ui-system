import { render, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Button } from "./Button";

test("should render Button component properly", () => {
  const { getByText } = render(<Button onClick={() => {}}>Click me</Button>);
  const buttonElement = getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});

test("should call onClick when Button is not disabled", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
  const buttonElement = getByText("Click me");
  fireEvent.click(buttonElement);
  expect(handleClick).toBeCalled();
});

test("should not call onClick when Button is disabled", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button disabled onClick={handleClick}>
      Click me
    </Button>
  );
  const buttonElement = getByText("Click me");
  fireEvent.click(buttonElement);
  expect(handleClick).not.toBeCalled();
});
