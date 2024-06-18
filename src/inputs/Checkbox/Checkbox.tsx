import * as React from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange(checked: boolean): void;
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
  const [isChecked, setIsChecked] = React.useState(checked);

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newChecked = event.target.checked;
      setIsChecked(newChecked);
      onChange(newChecked);
    }
  };

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
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.checkbox}
      />
      {label}
      <span className={styles.checkmark}></span>
    </label>
  );
};
