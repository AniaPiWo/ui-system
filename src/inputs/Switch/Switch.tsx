import css from "./Switch.module.css";
import * as React from "react";

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
}

export const Switch = (props: SwitchProps) => {
  const disabledClass = disabled ? css.disabled : " ";

  const sliderClasses = [css.slider, disabledClass].join(" ");

  const switchClasses = [css.switch, disabledClass].join(" ");

  return (
    <label className={switchClasses}>
      <input
        type="checkbox"
        checked={props.checked}
        disabled={props.disabled}
      ></input>
      <span className={sliderClasses}></span>
    </label>
  );
};
