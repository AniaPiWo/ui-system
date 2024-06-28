// Button.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";
jest.mock("../../assets/icons/PlusIcon", function () {
  return function () {
    return React.createElement("svg", { "data-testid": "plus-icon" });
  };
});
jest.mock("../../assets/icons/LoadingIcon", function () {
  return function () {
    return React.createElement("svg", { "data-testid": "loading-icon" });
  };
});
describe("Button component", function () {
  it("should render Button component properly", function () {
    var getByText = render(
      React.createElement(Button, { onClick: function () {} }, "Click me")
    ).getByText;
    var buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });
  it("should call onClick handler when clicking on it, when button is not disabled", function () {
    var handleClick = jest.fn();
    render(React.createElement(Button, { onClick: handleClick }, "Click me"));
    var button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("should not call onClick handler when button is disabled", function () {
    var handleClick = jest.fn();
    render(
      React.createElement(
        Button,
        { onClick: handleClick, disabled: true },
        "Click me"
      )
    );
    var button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
  it("should show SVG spinner when button is in loading state", function () {
    render(
      React.createElement(
        Button,
        { onClick: function () {}, isLoading: true, icon: true },
        "Loading"
      )
    );
    var loadingIcon = screen.getByTestId("loading-icon");
    expect(loadingIcon).toBeVisible();
  });
  it("should not call onClick handler when button is in loading state", function () {
    var handleClick = jest.fn();
    render(
      React.createElement(
        Button,
        { onClick: handleClick, isLoading: true },
        "Loading"
      )
    );
    var button = screen.getByRole("button", { name: /loading/i });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
  it("should render PlusIcon when button is not in loading state and icon is true", function () {
    render(
      React.createElement(
        Button,
        { onClick: function () {}, icon: true },
        "Click me"
      )
    );
    var plusIcon = screen.getByTestId("plus-icon");
    expect(plusIcon).toBeVisible();
  });
  it("should have correct classes applied based on props", function () {
    var rerender = render(
      React.createElement(
        Button,
        { onClick: function () {}, variant: "primary" },
        "Primary"
      )
    ).rerender;
    var primaryButton = screen.getByRole("button", { name: /primary/i });
    expect(primaryButton).toHaveClass("template primary");
    rerender(
      React.createElement(
        Button,
        { onClick: function () {}, variant: "secondary" },
        "Secondary"
      )
    );
    var secondaryButton = screen.getByRole("button", { name: /secondary/i });
    expect(secondaryButton).toHaveClass("template secondary");
    rerender(
      React.createElement(
        Button,
        { onClick: function () {}, variant: "primary", disabled: true },
        "Disabled"
      )
    );
    var disabledButton = screen.getByRole("button", { name: /disabled/i });
    expect(disabledButton).toHaveClass("template primary disabledPrimary");
  });
});
//# sourceMappingURL=Button.test.js.map
