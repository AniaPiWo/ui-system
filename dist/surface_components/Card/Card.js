import React from "react";
import styles from "./Card.module.css";
export var CardImage = function (_a) {
    var url = _a.url, alt = _a.alt;
    return (React.createElement("div", { className: styles.cardImage },
        React.createElement("img", { src: url, alt: alt })));
};
export var CardContent = function (_a) {
    var title = _a.title, description = _a.description, children = _a.children;
    return (React.createElement("div", { className: styles.cardContent },
        React.createElement("p", { className: styles.cardTitle }, title),
        React.createElement("p", { className: styles.cardDescription }, description),
        children));
};
export var Card = function (_a) {
    var children = _a.children, fullWidth = _a.fullWidth;
    return (React.createElement("div", { className: "".concat(styles.card, " ").concat(fullWidth ? styles.big : styles.small) }, children));
};
//# sourceMappingURL=Card.js.map