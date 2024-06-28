import { __assign } from "tslib";
import * as React from "react";
import { Switch } from "./Switch";
export default {
    component: Switch,
    title: "Inputs/Switch"
};
var Template = function (args) {
    return React.createElement(Switch, __assign({}, args));
};
export var SwitchStory = Template.bind({});
SwitchStory.args = {
    onChange: function () {
        console.log("Switch changed!");
    },
    id: "switch",
    label: "Switch label",
    checked: false,
    disabled: false
};
//# sourceMappingURL=Switch.stories.js.map