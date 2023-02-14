import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Link as MyLink } from "./Link";

export default {
  component: MyLink,
} as Meta;
export const Link: Story = (args) => (
  <MyLink id={"link-1"} onClick={() => {}} {...args}>
    This is link
  </MyLink>
);

Link.args = {
  value: "This is Link",
  id: "link-1",
  to: "www.google.com",
  target: "_blank",
  disabled: false,
};
