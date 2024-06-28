import { __assign } from "tslib";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TextField } from "./TextField";
describe("TextField Component", function () {
  var setup = function (props) {
    if (props === void 0) {
      props = {};
    }
    var defaultProps = {
      type: "text",
      autoFocus: false,
      disabled: false,
      value: "",
      label: "Label",
      name: "textfield",
      placeholder: "Enter text",
      error: "",
      hint: "",
      id: "textfield-id",
      onChange: jest.fn(),
      onFocus: jest.fn(),
      onBlur: jest.fn(),
      onClear: jest.fn(),
      withIcon: false,
    };
    var utils = render(
      React.createElement(TextField, __assign({}, defaultProps, props))
    );
    var input = utils.getByPlaceholderText(defaultProps.placeholder);
    return __assign(__assign({}, utils), {
      input: input,
      defaultProps: defaultProps,
    });
  };
  it("should call onChange handler when typing into it", function () {
    var handleChange = jest.fn(function (event) {
      return event.target.value;
    });
    var _a = setup({
        onChange: handleChange,
        value: "",
      }),
      input = _a.input,
      rerender = _a.rerender,
      defaultProps = _a.defaultProps;
    fireEvent.change(input, { target: { value: "new value" } });
    rerender(
      React.createElement(
        TextField,
        __assign({}, defaultProps, {
          value: "new value",
          onChange: handleChange,
        })
      )
    );
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("new value");
  });
  it("should not call onChange handler when TextField is disabled", function () {
    var handleChange = jest.fn();
    var input = setup({
      onChange: handleChange,
      disabled: true,
      value: "",
    }).input;
    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleChange).not.toHaveBeenCalled();
    expect(input.value).toBe("");
  });
  it("should have specific className active when TextField is focused", function () {
    var input = setup().input;
    fireEvent.focus(input);
    expect(input).toHaveClass("focusedWrapper");
  });
});
//# sourceMappingURL=TextField.test.js.map
