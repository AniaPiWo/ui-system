import { PropsWithChildren } from "react";
import css from "./Switch.module.css";
import * as React from "react";

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
}

export const Switch = ({
  disabled = false,
  checked = false,
}: PropsWithChildren<SwitchProps>) => {
  const disabledClass = disabled == true ? css.disabled : " ";

  const sliderClasses = [css.slider, disabledClass].join(" ");

  const switchClasses = [css.switch, disabledClass].join(" ");

  return (
    <label className={switchClasses}>
      <input type="checkbox" checked={checked} disabled={disabled}></input>
      <span className={sliderClasses}></span>
    </label>
  );
};
