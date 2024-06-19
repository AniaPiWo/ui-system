import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TextField, TextFieldProps } from "./TextField";

describe("TextField Component", () => {
  const setup = (props: Partial<TextFieldProps> = {}) => {
    const defaultProps: TextFieldProps = {
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
    const utils = render(<TextField {...defaultProps} {...props} />);
    const input = utils.getByPlaceholderText(
      defaultProps.placeholder!
    ) as HTMLInputElement;
    return { ...utils, input, defaultProps };
  };

  it("should call onChange handler when typing into it", () => {
    const handleChange = jest.fn((event) => event.target.value);
    const { input, rerender, defaultProps } = setup({
      onChange: handleChange,
      value: "",
    });

    fireEvent.change(input, { target: { value: "new value" } });

    rerender(
      <TextField {...defaultProps} value="new value" onChange={handleChange} />
    );

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("new value");
  });

  it("should not call onChange handler when TextField is disabled", () => {
    const handleChange = jest.fn();
    const { input } = setup({
      onChange: handleChange,
      disabled: true,
      value: "",
    });

    fireEvent.change(input, { target: { value: "new value" } });

    expect(handleChange).not.toHaveBeenCalled();
    expect(input.value).toBe("");
  });

  it("should have specific className active when TextField is focused", () => {
    const { input } = setup();

    fireEvent.focus(input);

    expect(input).toHaveClass("focusedWrapper");
  });
});
