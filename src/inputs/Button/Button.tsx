import React, { PropsWithChildren, useState, useEffect } from "react";
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
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const [isLoadingState, setIsLoadingState] = useState(isLoading);
  const [disabledState, setDisabledState] = useState(disabled);

  useEffect(() => {
    setIsLoadingState(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setDisabledState(disabled);
  }, [disabled]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabledState && !isLoadingState) {
      setIsLoadingState(true);
      onClick(event);
    }
  };

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
