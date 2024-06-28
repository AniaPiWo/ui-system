import * as React from "react";
export interface TextFieldProps {
  type?: "text" | "password";
  autoFocus?: boolean;
  disabled?: boolean;
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  id: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  withIcon?: boolean;
  onFocus?(event: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(event: React.ChangeEvent<HTMLInputElement>): void;
  onClear?(): void;
}
export declare const TextField: (props: TextFieldProps) => JSX.Element;
