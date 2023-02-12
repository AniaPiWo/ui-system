import * as React from "react";
import * as css from "./Textfield.module.css";

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
  const labelActiveClass =
    !!props.value || props.placeholder
      ? css.inputLabelActive
      : css.inputLabelInasctive;

  const labelDynamicClasses = [css.baseLabel, labelActiveClass].join(" ");
  const inputDynamicClasses = [css.inputWrapper].join(" ");

  return (
    <div>
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
        className={inputDynamicClasses}
      />
      {props.error && <span className={css.error}>{props.error}</span>}
      {props.hint && <span className={css.hint}>{props.hint}</span>}
    </div>
  );
};
