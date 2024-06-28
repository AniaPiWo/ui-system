import React from "react";
import styles from "./Link.module.css";
import PlusIcon from "../../assets/icons/PlusIcon";
var Link = function (_a) {
  var to = _a.to,
    id = _a.id,
    _b = _a.target,
    target = _b === void 0 ? "_self" : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    _d = _a.icon,
    icon = _d === void 0 ? false : _d,
    onClick = _a.onClick,
    children = _a.children;
  var handleClick = function (event) {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };
  return React.createElement(
    "a",
    {
      href: disabled ? undefined : to,
      id: id,
      target: target,
      className: ""
        .concat(styles.link, " ")
        .concat(disabled ? styles.disabled : ""),
      onClick: handleClick,
    },
    icon && React.createElement(PlusIcon, { className: styles.icon }),
    children
  );
};
Link.displayName = "Link";
export default Link;
//# sourceMappingURL=Link.js.map
