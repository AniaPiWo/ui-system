import { __assign } from "tslib";
import * as React from "react";
import { Checkbox } from "./Checkbox";
export default {
    component: Checkbox,
    title: "Inputs/Checkbox"
};
var Template = function (args) {
    return React.createElement(Checkbox, __assign({}, args));
};
export var CheckboxStory = Template.bind({});
CheckboxStory.args = {
    onChange: function () {
        console.log("Checkbox changed!");
    },
    id: "checkbox",
    label: "Checkbox label",
    checked: false,
    disabled: false
};
//# sourceMappingURL=Checkbox.stories.js.map