import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Switch as MySwitch } from "./Switch";

export default {
  component: MySwitch,
} as Meta;

export const Switch: Story = (args) => <MySwitch {...args}></MySwitch>;

Switch.args = {
  disabled: false,
  checked: false,
};
