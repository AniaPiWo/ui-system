import { __assign } from "tslib";
import React from "react";
import { Card, CardImage, CardContent } from "./Card";
import styles from "./Card.module.css";
import { Button } from "../../inputs";
import cardimg from "../../assets/cardimg.jpg";
export default {
    title: "SurfaceComponents/Card",
    component: Card
};
var Template = function (args) { return (React.createElement(Card, __assign({}, args),
    React.createElement(CardImage, { url: cardimg, alt: "Card Image" }),
    React.createElement(CardContent, { title: "Card name", description: "Card description goes here and it can be as long as it needs and so on." },
        React.createElement("div", { className: styles.buttonbox },
            React.createElement(Button, { variant: "primary", onClick: function () { return console.log("clicked"); } }, "Primary button"),
            React.createElement(Button, { variant: "secondary", onClick: function () { return console.log("clicked"); } }, "Secondary button"))))); };
export var CardStories = Template.bind({});
CardStories.args = {
    fullWidth: false
};
//# sourceMappingURL=Card.stories.js.map