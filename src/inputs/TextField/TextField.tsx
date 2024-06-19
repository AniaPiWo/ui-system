import { useState } from "react";
import * as React from "react";
import CancelIcon from "../../assets/icons/CancelIcon";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import MagGlassIcon from "../../assets/icons/MagGlassIcon";
import classNames from "classnames/bind";
import styles from "./TextField.module.css";

const cx = classNames.bind(styles);

export interface TextFieldProps {
  type?: "text" | "password";
  autoFocus?: boolean;
  disabled?: boolean;
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  id: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  withIcon?: boolean;
  onFocus?(event: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(event: React.ChangeEvent<HTMLInputElement>): void;
  onClear?(): void;
}

export const TextField = (props: TextFieldProps) => {
  const [focused, setFocus] = useState(false);

  const labelClassName = cx({
    baseLabel: true,
    inputLabelTop: !!props.value || props.placeholder || focused,
    inputLabelInside: !(!!props.value || props.placeholder || focused),
    focusedLabel: focused && !props.error,
    errorLabel: props.error && !props.disabled,
    labelDisabled: props.disabled,
  });

  const inputClassName = cx({
    inputWrapper: true,
    inputError: props.error,
    focusedWrapper: focused && !props.error,
    errorWrapper: props.error && !props.disabled,
    inputWrapperWitchIcon: props.withIcon,
    inputDisabled: props.disabled,
    withIcon: props.withIcon,
  });

  const iconLeftClasses = cx({
    baseIcon: true,
    leftIcon: true,
  });

  const iconRightClasses = cx({
    baseIcon: true,
    rightIcon: true,
  });

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocus(true);
    props.onFocus && props.onFocus(event);
  };
  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocus(false);
    props.onBlur && props.onBlur(event);
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    props.onClear && props.onClear();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.disabled) return;
    props.onChange(event);
  };

  return (
    <div className={inputClassName}>
      {props.label && (
        <label className={labelClassName} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <div>
        {props.withIcon && (
          <span className={iconLeftClasses}>{<MagGlassIcon />}</span>
        )}
        <input
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={props.value}
          type={props.type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputClassName}
          onChange={handleChange}
        />
        {props.error && !props.disabled && (
          <span className={iconRightClasses}>{<ErrorIcon />}</span>
        )}
        {!!props.value && !props.disabled && !props.error && props.onClear && (
          <span className={iconRightClasses} onClick={handleClear}>
            {<CancelIcon />}
          </span>
        )}
      </div>
      {props.error && !props.disabled && (
        <span className={styles.error}>{props.error}</span>
      )}
      {((props.hint && !props.error) || (props.hint && props.disabled)) && (
        <span className={styles.hint}>{props.hint}</span>
      )}
    </div>
  );
};
