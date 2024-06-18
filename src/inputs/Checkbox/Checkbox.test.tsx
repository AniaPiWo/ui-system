import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Checkbox } from "./Checkbox";

describe("Checkbox component", () => {
  test("should call onChange handler when clicked", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={false}
        onChange={handleChange}
      />
    );
    const checkbox = getByLabelText("Test Checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("should not call onChange handler when disabled", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={false}
        disabled={true}
        onChange={handleChange}
      />
    );
    const checkbox = getByLabelText("Test Checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("should toggle checked state when clicked", () => {
    const handleChange = jest.fn();
    const { getByLabelText, rerender } = render(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={false}
        onChange={handleChange}
      />
    );
    const checkbox = getByLabelText("Test Checkbox") as HTMLInputElement;

    // Click to check
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    rerender(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={true}
        onChange={handleChange}
      />
    );
    expect(checkbox.checked).toBe(true);

    // Click to uncheck
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(2);
    rerender(
      <Checkbox
        id="test-checkbox"
        label="Test Checkbox"
        checked={false}
        onChange={handleChange}
      />
    );
    expect(checkbox.checked).toBe(false);
  });
});
