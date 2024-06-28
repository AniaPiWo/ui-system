import { PropsWithChildren } from "react";
interface StepProps {
    label: string;
    completed: boolean;
    index: number;
}
export declare const Step: ({ label, completed, index, }: PropsWithChildren<StepProps>) => JSX.Element;
interface StepperProps {
    activeStep: number;
}
export declare const Stepper: ({ activeStep, ...props }: PropsWithChildren<StepperProps>) => JSX.Element;
export {};
