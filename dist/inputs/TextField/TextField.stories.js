import { __assign } from "tslib";
import * as React from "react";
import { TextField } from "./TextField";
export default {
  component: TextField,
};
var Template = function (args) {
  return React.createElement(TextField, __assign({}, args));
};
export var TextFieldStory = Template.bind({});
TextFieldStory.args = {
  onChange: function (e) {
    console.log("TextField changed!", e.target.value);
  },
  id: "id",
  name: "name",
  type: "text",
  label: "Label",
  placeholder: "Placeholder",
  value: "",
  hint: "",
  error: "",
  withIcon: false,
  disabled: false,
};
//# sourceMappingURL=TextField.stories.js.map
