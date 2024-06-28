import React, { useEffect, useState } from "react";
import styles from "./Checkbox.module.css";
export var Checkbox = function (_a) {
  var id = _a.id,
    label = _a.label,
    _b = _a.checked,
    checked = _b === void 0 ? false : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    name = _a.name,
    value = _a.value,
    onChange = _a.onChange;
  var _d = useState(checked),
    isChecked = _d[0],
    setIsChecked = _d[1];
  useEffect(
    function () {
      setIsChecked(checked);
    },
    [checked]
  );
  var handleClick = function (event) {
    if (!disabled) {
      setIsChecked(event.target.checked);
      onChange(event);
    }
  };
  return React.createElement(
    "label",
    {
      className: ""
        .concat(styles.container, " ")
        .concat(disabled ? styles.disabled : ""),
    },
    React.createElement("input", {
      type: "checkbox",
      id: id,
      name: name,
      value: value,
      checked: isChecked,
      disabled: disabled,
      onChange: handleClick,
      className: styles.checkbox,
    }),
    label,
    React.createElement("span", { className: styles.checkmark })
  );
};
//# sourceMappingURL=Checkbox.js.map
