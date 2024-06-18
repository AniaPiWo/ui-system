import { PropsWithChildren } from "react";
import * as React from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import LoadingIcon from "../../assets/icons/LoadingIcon";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick(): void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  icon?: boolean;
  type?: "button" | "submit";
}

export const Button = ({
  disabled = false,
  variant = "primary",
  type = "button",
  icon = false,
  isLoading = false,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;

  const getDisabledClassForSpecificVariant = (): string | void => {
    if (disabled) {
      return variant === "primary"
        ? styles.disabledPrimary
        : styles.disabledSecondary;
    }
  };

  const dynamicClasses = [
    styles.template,
    variantClass,
    getDisabledClassForSpecificVariant(),
    isLoading ? styles.loadingState : "",
  ].join(" ");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !isLoading) {
      onClick();
    }
  };

  return (
    <button
      className={dynamicClasses}
      onClick={handleClick}
      disabled={disabled || isLoading}
      type={type}
    >
      {icon && (
        <span className={styles.icon}>
          {isLoading && !disabled ? (
            <LoadingIcon className={styles.loading} />
          ) : (
            <PlusIcon />
          )}
        </span>
      )}{" "}
      {isLoading ? "Loading..." : props.children}
    </button>
  );
};
