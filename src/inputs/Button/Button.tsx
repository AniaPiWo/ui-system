import { PropsWithChildren, Fragment, useState } from "react";
import * as React from "react";
import * as css from "./Button.module.css";
import { IconLoading } from "../../icons/Loading";
import { IconPlus } from "../../icons/IconPlus";

interface ButtonProps {
  onClick(): void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}

export const Button = ({
  disabled = false,
  isLoading = false,
  variant = "primary",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const [isPressed, setPressed] = useState(false);

  const pressedClass = isPressed ? css.pressed : " ";

  const variantClass = variant === "primary" ? css.primary : css.secondary;

  const getDisabledClassForSpecificVariant = (): string | void => {
    if (disabled) {
      return variant === "primary"
        ? css.disabledPrimary
        : css.disabledSecondary;
    }
  };

  const getLoadingClassForSpecificVariant = (): string => {
    if (isLoading) {
      return variant === "primary"
        ? css.isLoadingPrimary
        : css.isLoadingSecondary;
    }
  };

  const dynamicClasses = [
    css.template,
    variantClass,
    pressedClass,
    getDisabledClassForSpecificVariant(),
    getLoadingClassForSpecificVariant(),
  ].join(" ");

  return (
    <button
      className={dynamicClasses}
      onClick={props.onClick}
      disabled={disabled}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {isLoading ? (
        <Fragment>{<IconLoading />}Loading...</Fragment>
      ) : (
        <Fragment>
          <IconPlus /> {props.children}
        </Fragment>
      )}
    </button>
  );
};
