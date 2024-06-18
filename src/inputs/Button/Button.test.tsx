// Button.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";

jest.mock("../../assets/icons/PlusIcon", () => () => (
  <svg data-testid="plus-icon" />
));
jest.mock("../../assets/icons/LoadingIcon", () => () => (
  <svg data-testid="loading-icon" />
));

describe("Button component", () => {
  it("should render Button component properly", () => {
    const { getByText } = render(<Button onClick={() => {}}>Click me</Button>);
    const buttonElement = getByText("Click me");

    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick handler when clicking on it, when button is not disabled", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick handler when button is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should show SVG spinner when button is in loading state", () => {
    render(
      <Button onClick={() => {}} isLoading icon>
        Loading
      </Button>
    );

    const loadingIcon = screen.getByTestId("loading-icon");
    expect(loadingIcon).toBeVisible();
  });

  it("should not call onClick handler when button is in loading state", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} isLoading>
        Loading
      </Button>
    );

    const button = screen.getByRole("button", { name: /loading/i });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should render PlusIcon when button is not in loading state and icon is true", () => {
    render(
      <Button onClick={() => {}} icon>
        Click me
      </Button>
    );

    const plusIcon = screen.getByTestId("plus-icon");
    expect(plusIcon).toBeVisible();
  });

  it("should have correct classes applied based on props", () => {
    const { rerender } = render(
      <Button onClick={() => {}} variant="primary">
        Primary
      </Button>
    );
    const primaryButton = screen.getByRole("button", { name: /primary/i });
    expect(primaryButton).toHaveClass("template primary");

    rerender(
      <Button onClick={() => {}} variant="secondary">
        Secondary
      </Button>
    );
    const secondaryButton = screen.getByRole("button", { name: /secondary/i });
    expect(secondaryButton).toHaveClass("template secondary");

    rerender(
      <Button onClick={() => {}} variant="primary" disabled>
        Disabled
      </Button>
    );
    const disabledButton = screen.getByRole("button", { name: /disabled/i });
    expect(disabledButton).toHaveClass("template primary disabledPrimary");
  });
});
