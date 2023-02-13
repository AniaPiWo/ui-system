import { PropsWithChildren, useState } from "react";
import css from "./Checkbox.module.css";

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
}

export const Checkbox = ({
  disabled = false,
  checked = false,
  ...props
}: PropsWithChildren<CheckboxProps>) => {
  const [isChecked, setChecked] = useState(false);

  const checkedClass = isChecked ? css.checked : "";
  const disabledClass = disabled == true ? css.disabled : "";

  const dynamicClasses = [checkedClass, disabledClass].join(" ");

  return (
    <label className={css.checkboxForm}>
      <input
        className={dynamicClasses}
        type="checkbox"
        disabled={disabled}
        onClick={() => setChecked(true)}
      ></input>
      <span className={css.title}>Checkbox label</span>
    </label>
  );
};
