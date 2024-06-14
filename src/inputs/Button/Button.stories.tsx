// Button.stories.tsx
import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Button as MyButton } from "./Button";

export default {
  component: MyButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as Meta;

export const Button: Story = (args) => (
  <MyButton {...args} onClick={() => {}}>
    Click me!
  </MyButton>
);

Button.args = {
  disabled: false,
  variant: "primary",
};
