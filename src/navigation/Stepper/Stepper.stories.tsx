import { Step, Stepper } from "./Stepper";
import { Meta, Story } from "@storybook/react";
import * as React from "react";

export default {
  component: Stepper,
  title: "Navigation/Stepper",
} as Meta;

const Template: Story<{ activeStep: number }> = (args) => {
  const steps = [
    { label: "Done step in the process" },
    { label: "Active step in the process" },
    { label: "Next step in the process" },
  ];

  return (
    <Stepper activeStep={args.activeStep}>
      {steps.map((step, index) => (
        <Step
          key={index}
          completed={args.activeStep > index}
          label={step.label}
          index={index}
        />
      ))}
    </Stepper>
  );
};

export const StepperStory = Template.bind({});
StepperStory.args = {
  activeStep: 1,
};
