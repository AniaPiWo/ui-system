import React, { PropsWithChildren } from "react";
export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  icon?: boolean;
  type?: "button" | "submit";
}
export declare const Button: ({
  disabled,
  variant,
  type,
  icon,
  isLoading,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => JSX.Element;
