import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { TextField, TextFieldProps } from "./TextField";

export default {
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  return <TextField {...args} />;
};

export const TextFieldStory = Template.bind({});
TextFieldStory.args = {
  onChange: (e) => {
    console.log("TextField changed!", e.target.value);
  },
  id: "id",
  name: "name",
  type: "text",
  label: "Label",
  placeholder: "Placeholder",
  value: "",
  hint: "",
  error: "",
  withIcon: false,
  disabled: false,
};
