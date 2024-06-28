import { Step, Stepper } from "./Stepper";
import * as React from "react";
export default {
    component: Stepper,
    title: "Navigation/Stepper"
};
var Template = function (args) {
    var steps = [
        { label: "Done step in the process" },
        { label: "Active step in the process" },
        { label: "Next step in the process" },
    ];
    return (React.createElement(Stepper, { activeStep: args.activeStep }, steps.map(function (step, index) { return (React.createElement(Step, { key: index, completed: args.activeStep > index, label: step.label, index: index })); })));
};
export var StepperStory = Template.bind({});
StepperStory.args = {
    activeStep: 1
};
//# sourceMappingURL=Stepper.stories.js.map