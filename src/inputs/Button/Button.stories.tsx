// Button.stories.tsx
import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Button as MyButton, ButtonProps } from "./Button";

export default {
  component: MyButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    icon: {},
  },
} as Meta;

export const Button: Story<ButtonProps> = (args) => (
  <MyButton {...args}>Click me!</MyButton>
);

Button.args = {
  disabled: false,
  variant: "primary",
};
