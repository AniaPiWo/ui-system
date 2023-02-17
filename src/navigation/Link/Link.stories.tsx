import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Link as MyLink } from "./Link";
import { IconPlus } from "../../icons/IconPlus";

export default {
  component: MyLink,
} as Meta;
export const Link: Story = (args) => (
  <MyLink
    id={"link-1"}
    to={"www.google.com"}
    target={"_blank"}
    onClick={() => {
      console.log("Button clicked!");
    }}
    {...args}
  >
    {" "}
    <IconPlus />
    This is link
  </MyLink>
);

Link.args = {
  id: "link-1",
  to: "www.google.com",
  disabled: false,
};
