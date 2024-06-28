import React, { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionIcon from "../../assets/icons/AccordionIcon";
export var Accordion = function (_a) {
  var header = _a.header,
    content = _a.content,
    _b = _a.defaultOpen,
    defaultOpen = _b === void 0 ? false : _b;
  var _c = useState(defaultOpen),
    isOpen = _c[0],
    setIsOpen = _c[1];
  return React.createElement(
    "div",
    { className: styles.accordion },
    React.createElement(
      "div",
      {
        className: styles.header,
        onClick: function () {
          return setIsOpen(!isOpen);
        },
      },
      React.createElement("h2", { className: styles.title }, header),
      React.createElement(AccordionIcon, {
        className: ""
          .concat(styles.arrow, " ")
          .concat(isOpen ? styles.open : ""),
      })
    ),
    React.createElement(
      "div",
      {
        className: ""
          .concat(styles.content, " ")
          .concat(isOpen ? styles.open : ""),
      },
      content
    )
  );
};
//# sourceMappingURL=Accordion.js.map
