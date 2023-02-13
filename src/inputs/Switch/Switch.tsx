import { PropsWithChildren, useState } from "react";
import css from "./Switch.module.css";
import * as React from "react";

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(): void;
}

export const Switch = ({
  disabled = false,
  checked = false,
}: PropsWithChildren<SwitchProps>) => {
  const [isChecked, setChecked] = useState(checked);

  const disabledClass = disabled == true ? css.disabled : " ";

  const sliderClasses = [css.slider, disabledClass].join(" ");

  const switchClasses = [css.switch, disabledClass].join(" ");

  return (
    <label className={switchClasses}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={() => {
          setChecked(!isChecked);
        }}
      ></input>
      <span className={sliderClasses}></span>
    </label>
  );
};
