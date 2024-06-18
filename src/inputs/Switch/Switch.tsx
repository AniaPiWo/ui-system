import * as React from "react";
import styles from "./Switch.module.css";

export interface SwitchProps {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange(checked: boolean): void;
}

export const Switch = ({
  id,
  checked = false,
  disabled = false,
  onChange,
}: SwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event.target.checked);
    }
  };

  return (
    <label
      className={`${styles.switch} ${disabled ? styles.disabled : ""}`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.input}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
