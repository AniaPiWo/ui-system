import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { TextField, TextFieldProps } from "./TextField";

export default {
  component: TextField,
  title: "Inputs/TextField",
} as Meta;

const Template: Story<TextFieldProps> = (args) => {
  return <TextField {...args} />;
};

export const TextFieldStory = Template.bind({});
TextFieldStory.args = {
  onChange: (e) => {
    console.log("TextField changed!", e.target.value);
  },
  id: "textfield",
  label: "Label",
  value: "",
  placeholder: "Input",
  disabled: false,
};
