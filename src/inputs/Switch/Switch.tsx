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
    <label className={`${styles.switch} ${disabled ? styles.disabled : ""}`}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.input}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
