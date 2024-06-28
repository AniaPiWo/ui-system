import { useState } from "react";
import * as React from "react";
import CancelIcon from "../../assets/icons/CancelIcon";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import MagGlassIcon from "../../assets/icons/MagGlassIcon";
import classNames from "classnames/bind";
import styles from "./TextField.module.css";
var cx = classNames.bind(styles);
export var TextField = function (props) {
  var _a = useState(false),
    focused = _a[0],
    setFocus = _a[1];
  var labelClassName = cx({
    baseLabel: true,
    inputLabelTop: !!props.value || props.placeholder || focused,
    inputLabelInside: !(!!props.value || props.placeholder || focused),
    focusedLabel: focused && !props.error,
    errorLabel: props.error && !props.disabled,
    labelDisabled: props.disabled,
  });
  var inputClassName = cx({
    inputWrapper: true,
    inputError: props.error,
    focusedWrapper: focused && !props.error,
    errorWrapper: props.error && !props.disabled,
    inputWrapperWitchIcon: props.withIcon,
    inputDisabled: props.disabled,
    withIcon: props.withIcon,
  });
  var iconLeftClasses = cx({
    baseIcon: true,
    leftIcon: true,
  });
  var iconRightClasses = cx({
    baseIcon: true,
    rightIcon: true,
  });
  var handleFocus = function (event) {
    setFocus(true);
    props.onFocus && props.onFocus(event);
  };
  var handleBlur = function (event) {
    setFocus(false);
    props.onBlur && props.onBlur(event);
  };
  var handleClear = function (event) {
    event.stopPropagation();
    props.onClear && props.onClear();
  };
  var handleChange = function (event) {
    if (props.disabled) return;
    props.onChange(event);
  };
  return React.createElement(
    "div",
    { className: inputClassName },
    props.label &&
      React.createElement(
        "label",
        { className: labelClassName, htmlFor: props.id },
        props.label
      ),
    React.createElement(
      "div",
      null,
      props.withIcon &&
        React.createElement(
          "span",
          { className: iconLeftClasses },
          React.createElement(MagGlassIcon, null)
        ),
      React.createElement("input", {
        id: props.id,
        name: props.name,
        placeholder: props.placeholder,
        disabled: props.disabled,
        value: props.value,
        type: props.type,
        onFocus: handleFocus,
        onBlur: handleBlur,
        className: inputClassName,
        onChange: handleChange,
      }),
      props.error &&
        !props.disabled &&
        React.createElement(
          "span",
          { className: iconRightClasses },
          React.createElement(ErrorIcon, null)
        ),
      !!props.value &&
        !props.disabled &&
        !props.error &&
        props.onClear &&
        React.createElement(
          "span",
          { className: iconRightClasses, onClick: handleClear },
          React.createElement(CancelIcon, null)
        )
    ),
    props.error &&
      !props.disabled &&
      React.createElement("span", { className: styles.error }, props.error),
    ((props.hint && !props.error) || (props.hint && props.disabled)) &&
      React.createElement("span", { className: styles.hint }, props.hint)
  );
};
//# sourceMappingURL=TextField.js.map
