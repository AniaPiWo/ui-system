import { __assign } from "tslib";
import React from "react";
import Link from "./Link";
export default {
    component: Link,
    title: "Navigation/Link"
};
var Template = function (args) { return React.createElement(Link, __assign({}, args), "Click me!"); };
export var LinkStory = Template.bind({});
LinkStory.args = {
    to: "https://example.com",
    id: "link",
    disabled: false,
    icon: false,
    onClick: function () {
        console.log("link clicked!");
    }
};
//# sourceMappingURL=Link.stories.js.map