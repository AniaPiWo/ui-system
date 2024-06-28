import React from "react";
export interface CheckboxProps {
    id: string;
    label?: string;
    checked: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
export declare const Checkbox: React.FC<CheckboxProps>;
