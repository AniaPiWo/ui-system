import React, { useState, useEffect } from "react";
import styles from "./Switch.module.css";
export var Switch = function (_a) {
  var id = _a.id,
    _b = _a.checked,
    checked = _b === void 0 ? false : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    onChange = _a.onChange,
    name = _a.name,
    value = _a.value;
  var _d = useState(checked),
    isChecked = _d[0],
    setIsChecked = _d[1];
  useEffect(
    function () {
      setIsChecked(checked);
    },
    [checked]
  );
  var handleChange = function (event) {
    if (!disabled) {
      setIsChecked(event.target.checked);
      onChange(event);
    }
  };
  return React.createElement(
    "label",
    {
      className: ""
        .concat(styles["switch"], " ")
        .concat(disabled ? styles.disabled : ""),
    },
    React.createElement("input", {
      type: "checkbox",
      id: id,
      name: name,
      value: value,
      checked: isChecked,
      disabled: disabled,
      onChange: handleChange,
      className: styles.input,
    }),
    React.createElement("span", { className: styles.slider })
  );
};
//# sourceMappingURL=Switch.js.map
