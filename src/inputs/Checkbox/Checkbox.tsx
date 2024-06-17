import * as React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange(): void;
}

export const Checkbox = ({
  id,
  label,
  checked,
  disabled,
  name,
  value,
  onChange,
}: CheckboxProps) => {
  return (
    <label
      className={`${styles.container} ${disabled ? styles.disabled : ""}`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={styles.checkbox}
      />
      {label}
      <span className={styles.checkmark}></span>
    </label>
  );
};
