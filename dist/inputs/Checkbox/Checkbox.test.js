import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Checkbox } from "./Checkbox";
describe("Checkbox component", function () {
  test("should call onChange handler when clicked", function () {
    var handleChange = jest.fn();
    var getByLabelText = render(
      React.createElement(Checkbox, {
        id: "test-checkbox",
        label: "Test Checkbox",
        checked: false,
        onChange: handleChange,
      })
    ).getByLabelText;
    var checkbox = getByLabelText("Test Checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  test("should not call onChange handler when disabled", function () {
    var handleChange = jest.fn();
    var getByLabelText = render(
      React.createElement(Checkbox, {
        id: "test-checkbox",
        label: "Test Checkbox",
        checked: false,
        disabled: true,
        onChange: handleChange,
      })
    ).getByLabelText;
    var checkbox = getByLabelText("Test Checkbox");
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });
  test("should toggle checked state when clicked", function () {
    var handleChange = jest.fn();
    var _a = render(
        React.createElement(Checkbox, {
          id: "test-checkbox",
          label: "Test Checkbox",
          checked: false,
          onChange: handleChange,
        })
      ),
      getByLabelText = _a.getByLabelText,
      rerender = _a.rerender;
    var checkbox = getByLabelText("Test Checkbox");
    // Click to check
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    rerender(
      React.createElement(Checkbox, {
        id: "test-checkbox",
        label: "Test Checkbox",
        checked: true,
        onChange: handleChange,
      })
    );
    expect(checkbox.checked).toBe(true);
    // Click to uncheck
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(2);
    rerender(
      React.createElement(Checkbox, {
        id: "test-checkbox",
        label: "Test Checkbox",
        checked: false,
        onChange: handleChange,
      })
    );
    expect(checkbox.checked).toBe(false);
  });
});
//# sourceMappingURL=Checkbox.test.js.map
