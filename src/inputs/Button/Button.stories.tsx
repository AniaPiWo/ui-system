// Button.stories.tsx
import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Inputs/Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} onClick={() => console.log("Button clicked!")}>
    Click me!
  </Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  variant: "primary",
  disabled: false,
};
