import { __assign } from "tslib";
import * as React from "react";
import { Button } from "./Button";
export default {
    component: Button,
    title: "Inputs/Button",
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: { type: "select" }
        }
    }
};
var Template = function (args) { return (React.createElement(Button, __assign({}, args, { onClick: function () { return console.log("Button clicked!"); } }), "Click me!")); };
export var ButtonStory = Template.bind({});
ButtonStory.args = {
    variant: "primary",
    disabled: false
};
//# sourceMappingURL=Button.stories.js.map