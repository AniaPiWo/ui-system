import React, { useContext, PropsWithChildren } from "react";
import classNames from "classnames/bind";
import { CheckedIcon } from "../../assets/icons/CheckedIcon";

import styles from "./Stepper.module.css";

const cx = classNames.bind(styles);

interface StepProps {
  label: string;
  completed: boolean;
  index: number;
}

export const Step = ({
  label,
  completed,
  index,
}: PropsWithChildren<StepProps>) => {
  const { activeStep } = useContext(StepperContext);

  const stepClasses = cx({
    step: true,
    stepCompleted: completed,
    stepActive: activeStep === index,
  });

  const lineClasses = cx({
    stepperLine: true,
    stepCompleted: completed,
  });

  return (
    <div className={styles.stepWrapper}>
      <div className={stepClasses}>
        <div>{!completed ? index + 1 : <CheckedIcon />}</div>
      </div>
      <div className={lineClasses}></div>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

interface StepperProps {
  activeStep: number;
}

const StepperContext = React.createContext<StepperProps>({
  activeStep: 0,
});

export const Stepper = ({
  activeStep,
  ...props
}: PropsWithChildren<StepperProps>) => {
  return (
    <div className={styles.stepperWrapper}>
      <StepperContext.Provider value={{ activeStep }}>
        {props.children}
      </StepperContext.Provider>
    </div>
  );
};
