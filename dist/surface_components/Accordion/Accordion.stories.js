import { __assign } from "tslib";
import React from "react";
import { Accordion } from "./Accordion";
export default {
  title: "SurfaceComponents/Accordion",
  component: Accordion,
};
var Template = function (args) {
  return React.createElement(Accordion, __assign({}, args));
};
export var AccordionStory = Template.bind({});
AccordionStory.args = {
  header: "Accordion 1",
  content: "This accordion contains a long content. ".repeat(10),
  defaultOpen: false,
};
//# sourceMappingURL=Accordion.stories.js.map
