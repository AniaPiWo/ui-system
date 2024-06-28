import { __rest } from "tslib";
import React, { useState, useEffect } from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import LoadingIcon from "../../assets/icons/LoadingIcon";
import styles from "./Button.module.css";
export var Button = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "primary" : _c, _d = _a.type, type = _d === void 0 ? "button" : _d, _e = _a.icon, icon = _e === void 0 ? false : _e, _f = _a.isLoading, isLoading = _f === void 0 ? false : _f, onClick = _a.onClick, props = __rest(_a, ["disabled", "variant", "type", "icon", "isLoading", "onClick"]);
    var _g = useState(isLoading), isLoadingState = _g[0], setIsLoadingState = _g[1];
    var _h = useState(disabled), disabledState = _h[0], setDisabledState = _h[1];
    useEffect(function () {
        setIsLoadingState(isLoading);
    }, [isLoading]);
    useEffect(function () {
        setDisabledState(disabled);
    }, [disabled]);
    var handleClick = function (event) {
        if (!disabledState && !isLoadingState) {
            setIsLoadingState(true);
            onClick(event);
        }
    };
    var variantClass = variant === "primary" ? styles.primary : styles.secondary;
    var getDisabledClassForSpecificVariant = function () {
        if (disabled) {
            return variant === "primary"
                ? styles.disabledPrimary
                : styles.disabledSecondary;
        }
    };
    var dynamicClasses = [
        styles.template,
        variantClass,
        getDisabledClassForSpecificVariant(),
        isLoading ? styles.loadingState : "",
    ].join(" ");
    return (React.createElement("button", { className: dynamicClasses, onClick: handleClick, disabled: disabled || isLoading, type: type },
        icon && (React.createElement("span", { className: styles.icon }, isLoading && !disabled ? (React.createElement(LoadingIcon, { className: styles.loading })) : (React.createElement(PlusIcon, null)))),
        " ",
        isLoading ? "Loading..." : props.children));
};
//# sourceMappingURL=Button.js.map