import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Textfield as MyTextfield } from "./Textfield";

export default {
  component: MyTextfield,
} as Meta;

export const Textfield: Story = (args) => <MyTextfield {...args}></MyTextfield>;

Textfield.args = {
  type: "text",
  disabled: false,
  value: "",
  label: "",
  placeholder: "",
  error: "",
  hint: "",
  id: "",
  name: "",
};
