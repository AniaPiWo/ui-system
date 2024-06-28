import React from "react";
export interface SwitchProps {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
export declare const Switch: React.FC<SwitchProps>;
