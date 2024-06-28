import { __assign } from "tslib";
import React from "react";
import { Avatar } from "./Avatar";
import avatar from "../../assets/avatars/avatar.jpg";
export default {
  title: "DataDisplay/Avatar",
  component: Avatar,
};
var Template = function (args) {
  return React.createElement(Avatar, __assign({}, args));
};
export var AvatarStory = Template.bind({});
AvatarStory.args = {
  src: avatar,
  alt: "Small Avatar",
  size: "small",
};
export var AvatarNoPic = Template.bind({});
AvatarNoPic.args = {
  alt: "Small Avatar",
  size: "small",
};
//# sourceMappingURL=Avatar.stories.js.map
