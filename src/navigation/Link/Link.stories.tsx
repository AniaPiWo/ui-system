import { Meta, Story } from "@storybook/react";
import React from "react";
import Link, { LinkProps } from "./Link";

export default {
  component: Link,
  title: "Navigation/Link",
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args}>Click me!</Link>;

export const LinkStory = Template.bind({});

LinkStory.args = {
  to: "https://example.com",
  id: "link",
  disabled: false,
  icon: false,
  onClick: () => {
    console.log("link clicked!");
  },
};
