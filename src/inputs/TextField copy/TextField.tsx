import React, { useState, useEffect } from "react";
import styles from "./TextField.module.css";

export interface TextFieldProps {
  id: string;
  label?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  placeholder,
  disabled = false,
  error = false,
  focused = false,
  onChange,
}: TextFieldProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(focused);
  const [isError, setIsError] = useState(error);
  const [message, setMessage] = useState("Supporting text");

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setIsFocused(focused);
  }, [focused]);

  useEffect(() => {
    setIsError(error);
  }, [error]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setInputValue(event.target.value);
    onChange(event);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.container}>
      {label && (
        <label
          htmlFor={id}
          className={`${styles.label} ${isFocused ? styles.labelTop : ""} ${
            isError ? styles.errorLabel : ""
          }`}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${styles.input} ${isFocused ? styles.focusedInput : ""} ${
          isError ? styles.errorInput : ""
        }`}
      />
      {message && (
        <span
          className={`${styles.message} ${
            isError ? styles.errorMsg : styles.supportingMsg
          }`}
        >
          {message}
        </span>
      )}
    </div>
  );
};
