import React from "react";
import { List, ListItem, ListHeader, ListText } from "./List";
import Avatar from "../Avatar/Avatar";
import { Switch } from "../../inputs/Switch/Switch";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
export default {
  title: "DataDisplay/List",
  component: List,
};
export var TextStory = function () {
  return React.createElement(
    List,
    null,
    React.createElement(
      ListItem,
      null,
      React.createElement(ListHeader, null, "List item"),
      React.createElement(
        ListText,
        null,
        "Supporting line text lorem ipsum dolor sit amet, consectetur Lorem ipsum"
      )
    )
  );
};
export var HeaderOnlyStory = function () {
  return React.createElement(
    List,
    null,
    React.createElement(
      ListItem,
      null,
      React.createElement(ListHeader, null, "List item")
    )
  );
};
export var AvatarStory = function () {
  return React.createElement(
    List,
    null,
    React.createElement(
      ListItem,
      null,
      React.createElement(Avatar, { size: "big", alt: "Avatar" })
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(ListHeader, null, "List item"),
      React.createElement(
        ListText,
        null,
        "Supporting line text lorem ipsum dolor sit amet, consectetur"
      )
    )
  );
};
export var SwitchStory = function () {
  return React.createElement(
    List,
    null,
    React.createElement(
      ListItem,
      null,
      React.createElement(Switch, {
        id: "switch-1",
        checked: false,
        onChange: function () {
          console.log("switched");
        },
      })
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(ListHeader, null, "List item")
    )
  );
};
export var CheckboxStory = function () {
  return React.createElement(
    List,
    null,
    React.createElement(
      ListItem,
      null,
      React.createElement(ListHeader, null, "List item")
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(Checkbox, {
        id: "checkbox-1",
        checked: true,
        label: "Checkbox item",
        onChange: function () {
          console.log("checked");
        },
      })
    )
  );
};
//# sourceMappingURL=List.stories.js.map
