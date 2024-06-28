import React, { useState } from "react";
import styles from "./Avatar.module.css";
export var Avatar = function (_a) {
  var src = _a.src,
    alt = _a.alt,
    _b = _a.size,
    size = _b === void 0 ? "medium" : _b;
  var _c = useState(false),
    imgError = _c[0],
    setImgError = _c[1];
  var handleError = function () {
    setImgError(true);
  };
  return React.createElement(
    "div",
    { className: "".concat(styles.avatar, " ").concat(styles[size]) },
    imgError || !src
      ? React.createElement("span", { className: styles.fallback }, "A")
      : React.createElement("img", {
          className: styles.avatar,
          src: src,
          alt: alt,
          onError: handleError,
        })
  );
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map
