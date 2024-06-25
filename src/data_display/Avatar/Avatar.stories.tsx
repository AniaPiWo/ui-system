import React from "react";
import { Meta, Story } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";
import avatar from "../../assets/avatars/avatar.jpg";

export default {
  title: "DataDisplay/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarStory = Template.bind({});
AvatarStory.args = {
  src: avatar,
  alt: "Small Avatar",
  size: "small",
};

export const AvatarNoPic = Template.bind({});
AvatarNoPic.args = {
  alt: "Small Avatar",
  size: "small",
};
