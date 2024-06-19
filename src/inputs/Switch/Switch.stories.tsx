import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Switch, SwitchProps } from "./Switch";

export default {
  component: Switch,
  title: "Inputs/Switch",
} as Meta;

const Template: Story<SwitchProps> = (args) => {
  return <Switch {...args} />;
};

export const SwitchStory = Template.bind({});
SwitchStory.args = {
  onChange: () => {
    console.log("Switch changed!");
  },
  id: "switch",
  label: "Switch label",
  checked: false,
  disabled: false,
};
