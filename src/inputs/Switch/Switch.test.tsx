import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Switch } from "./Switch";

describe("Switch component", () => {
  test("onChange handler should be called when clicking on it, when one is not disabled. Expected isChecked should be true. After clicking on it again, expected isChecked value should be false", () => {
    const handleChange = jest.fn();
    let checked = false;

    const { getByRole, rerender } = render(
      <Switch
        id="test-switch"
        checked={checked}
        onChange={(event) => {
          checked = event.target.checked;
          handleChange(event.target.checked);
          rerender(
            <Switch
              id="test-switch"
              checked={checked}
              onChange={(e) => {
                checked = e.target.checked;
                handleChange(e.target.checked);
                rerender(
                  <Switch
                    id="test-switch"
                    checked={checked}
                    onChange={handleChange}
                  />
                );
              }}
            />
          );
        }}
      />
    );

    const checkbox = getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(false);
    expect(checkbox.checked).toBe(false);
  });

  test("onChange handler should not be called when Switch is disabled", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <Switch
        id="test-switch"
        checked={false}
        disabled={true}
        onChange={handleChange}
      />
    );

    const checkbox = getByRole("checkbox") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
