import * as React from "react";
import * as css from "./Textfield.module.css";
import { IconError } from "../../icons/IconError";
import { IconCloseTF } from "../../icons/IconCloseTF";

interface TextFieldProps {
  type?: "text" | "password";
  autoFocus?: boolean;
  disabled?: boolean;
  value: string;
  label?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  id: string;
  name: string;
  onChange(): void;
}

export const Textfield = (props: TextFieldProps) => {
  const [focused, setFocus] = React.useState(false);

  const labelActiveClass =
    !!props.value || props.placeholder || focused
      ? css.inputLabelActive
      : css.inputLabelInactive;

  const typedInputClass = !!props.value ? css.inputTyped : "";
  const errorInputClass = !!props.error ? css.inputError : "";
  const focusedInputClass = !!focused && !props.error ? css.inputFocused : "";

  const labelDynamicClasses = [css.baseLabel, labelActiveClass].join(" ");
  const inputDynamicClasses = [
    css.inputWrapper,
    errorInputClass,
    focusedInputClass,
    typedInputClass,
  ].join(" ");

  return (
    <div className={inputDynamicClasses}>
      {props.label && (
        <label className={labelDynamicClasses} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        type={props.type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={inputDynamicClasses}
      />{" "}
      <span className={css.closeIcon}>
        <IconCloseTF />
      </span>
      {props.error && (
        <span className={css.errorIcon}>
          <IconError />
        </span>
      )}
      {props.error && <span className={css.error}>{props.error}</span>}
      {props.hint && !props.error && (
        <span className={css.hint}>{props.hint}</span>
      )}
    </div>
  );
};
