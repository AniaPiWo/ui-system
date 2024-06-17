import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Checkbox as MyCheckbox } from "./Checkbox";

export default {
  component: MyCheckbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta;

export const Checkbox: Story = (args) => (
  <MyCheckbox
    {...args}
    id="checkbox"
    label={""}
    checked={false}
    disabled={false}
    onChange={() => {}}
  />
);

Checkbox.args = {
  label: "Checkbox label",
  checked: false,
  disabled: false,
};
