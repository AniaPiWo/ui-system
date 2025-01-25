import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import PlusIcon from "../../assets/icons/PlusIcon";
import LoadingIcon from "../../assets/icons/LoadingIcon";
import styles from "./Button.module.css";

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  children,
}: PropsWithChildren<ButtonProps>) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !isLoading) {
      onClick(event);
    }
  };

  const buttonClasses = clsx(
    styles.template,
    variant === "primary" ? styles.primary : styles.secondary,
    {
      [styles.disabledPrimary]: disabled && variant === "primary",
      [styles.disabledSecondary]: disabled && variant === "secondary",
      [styles.loadingState]: isLoading,
    }
  );

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || isLoading}
      type={type}
      aria-busy={isLoading}
    >
      {icon && (
        <span className={styles.icon}>
          {isLoading ? (
            <LoadingIcon className={styles.loading} />
          ) : (
            <PlusIcon />
          )}
        </span>
      )}
      {isLoading ? "Loading..." : children}
    </button>
  );
};
