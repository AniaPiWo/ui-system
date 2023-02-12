import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
} as Meta;

export const CheckBox: Story = (args) => <Checkbox {...args}></Checkbox>;

CheckBox.args = {
  disabled: false,
};
