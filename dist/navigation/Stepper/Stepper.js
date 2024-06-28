import { __rest } from "tslib";
import React, { useContext } from "react";
import classNames from "classnames/bind";
import { CheckedIcon } from "../../assets/icons/CheckedIcon";
import styles from "./Stepper.module.css";
var cx = classNames.bind(styles);
export var Step = function (_a) {
  var label = _a.label,
    completed = _a.completed,
    index = _a.index;
  var activeStep = useContext(StepperContext).activeStep;
  var stepClasses = cx({
    step: true,
    stepCompleted: completed,
    stepActive: activeStep === index,
  });
  var lineClasses = cx({
    stepperLine: true,
    stepCompleted: completed,
  });
  return React.createElement(
    "div",
    { className: styles.stepWrapper },
    React.createElement(
      "div",
      { className: stepClasses },
      React.createElement(
        "div",
        null,
        !completed ? index + 1 : React.createElement(CheckedIcon, null)
      )
    ),
    React.createElement("div", { className: lineClasses }),
    React.createElement("p", { className: styles.label }, label)
  );
};
var StepperContext = React.createContext({
  activeStep: 0,
});
export var Stepper = function (_a) {
  var activeStep = _a.activeStep,
    props = __rest(_a, ["activeStep"]);
  return React.createElement(
    "div",
    { className: styles.stepperWrapper },
    React.createElement(
      StepperContext.Provider,
      { value: { activeStep: activeStep } },
      props.children
    )
  );
};
//# sourceMappingURL=Stepper.js.map
