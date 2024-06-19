import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  component: Checkbox,
  title: "Inputs/Checkbox",
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

export const CheckboxStory = Template.bind({});
CheckboxStory.args = {
  onChange: () => {
    console.log("Checkbox changed!");
  },
  id: "checkbox",
  label: "Checkbox label",
  checked: false,
  disabled: false,
};
