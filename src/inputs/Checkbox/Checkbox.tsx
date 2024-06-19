import React, { useEffect, useState } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  disabled = false,
  name,
  value,
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsChecked(event.target.checked);
      onChange(event);
    }
  };

  return (
    <label className={`${styles.container} ${disabled ? styles.disabled : ""}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleClick}
        className={styles.checkbox}
      />
      {label}
      <span className={styles.checkmark}></span>
    </label>
  );
};
