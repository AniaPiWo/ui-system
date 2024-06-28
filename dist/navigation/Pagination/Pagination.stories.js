import { __assign } from "tslib";
import React from "react";
import { Pagination } from "./Pagination";
export default {
  title: "Navigation/Pagination",
  component: Pagination,
};
var Template = function (args) {
  return React.createElement(Pagination, __assign({}, args));
};
export var PaginationStory = Template.bind({});
PaginationStory.args = {
  maxPages: 10,
  currentPage: 1,
  onChange: function (page) {
    console.log("Page changed to: ".concat(page));
  },
};
//# sourceMappingURL=Pagination.stories.js.map
