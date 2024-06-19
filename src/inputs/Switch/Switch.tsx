import React, { useState, useEffect } from "react";
import styles from "./Switch.module.css";

export interface SwitchProps {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  checked = false,
  disabled = false,
  onChange,
  name,
  value,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsChecked(event.target.checked);
      onChange(event);
    }
  };

  return (
    <label className={`${styles.switch} ${disabled ? styles.disabled : ""}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.input}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
