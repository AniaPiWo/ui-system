import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Checkbox as MyCheckbox } from "./Checkbox";

export default {
  component: MyCheckbox,
} as Meta;

export const Checkbox: Story = (args) => <MyCheckbox {...args}></MyCheckbox>;

Checkbox.args = {
  disabled: false,
};
