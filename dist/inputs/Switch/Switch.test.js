import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Switch } from "./Switch";
describe("Switch component", function () {
  test("onChange handler should be called when clicking on it, when one is not disabled. Expected isChecked should be true. After clicking on it again, expected isChecked value should be false", function () {
    var handleChange = jest.fn();
    var checked = false;
    var _a = render(
        React.createElement(Switch, {
          id: "test-switch",
          checked: checked,
          onChange: function (event) {
            checked = event.target.checked;
            handleChange(event.target.checked);
            rerender(
              React.createElement(Switch, {
                id: "test-switch",
                checked: checked,
                onChange: function (e) {
                  checked = e.target.checked;
                  handleChange(e.target.checked);
                  rerender(
                    React.createElement(Switch, {
                      id: "test-switch",
                      checked: checked,
                      onChange: handleChange,
                    })
                  );
                },
              })
            );
          },
        })
      ),
      getByRole = _a.getByRole,
      rerender = _a.rerender;
    var checkbox = getByRole("checkbox");
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
    expect(checkbox.checked).toBe(true);
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(false);
    expect(checkbox.checked).toBe(false);
  });
  test("onChange handler should not be called when Switch is disabled", function () {
    var handleChange = jest.fn();
    var getByRole = render(
      React.createElement(Switch, {
        id: "test-switch",
        checked: false,
        disabled: true,
        onChange: handleChange,
      })
    ).getByRole;
    var checkbox = getByRole("checkbox");
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=Switch.test.js.map
