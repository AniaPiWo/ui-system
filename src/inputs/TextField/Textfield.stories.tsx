import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Textfield as MyTextfield } from "./Textfield";

export default {
  component: MyTextfield,
  argTypes: {
    type: {
      options: ["text", "password"],
      control: { type: "select" },
    },
  },
} as Meta;

export const Textfield: Story = (args) => (
  <MyTextfield
    name={"input-name"}
    id={"input-1"}
    value={""}
    onChange={() => {}}
    {...args}
  ></MyTextfield>
);

Textfield.args = {
  type: "text",
  disabled: false,
  label: "Input label",
  placeholder: "Placeholder",
  error: "",
  hint: "Hint message",
  name: "input-id",
};
