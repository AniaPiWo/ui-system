import React, { useEffect, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Tabs.module.css";
var cx = classNames.bind(styles);
export var Tab = function (_a) {
    var label = _a.label, index = _a.index;
    var _b = useContext(TabsContext), activeTab = _b.activeTab, setActiveTab = _b.setActiveTab;
    var tabClasses = cx({
        tab: true,
        tabActive: activeTab === index,
        barActive: activeTab === index
    });
    return (React.createElement("div", { className: styles.tabWrapper, onClick: function () { return setActiveTab(index); } },
        React.createElement("div", { className: tabClasses },
            React.createElement("p", { className: styles.label },
                label,
                React.createElement("div", { className: styles.bar })))));
};
export var TabContent = function (_a) {
    var index = _a.index, children = _a.children;
    var activeTab = useContext(TabsContext).activeTab;
    return activeTab === index ? (React.createElement("div", { className: styles.tabContent }, children)) : null;
};
var TabsContext = React.createContext({
    activeTab: 0,
    setActiveTab: function () { }
});
export var Tabs = function (_a) {
    var tabs = _a.tabs, _b = _a.initialActiveTab, initialActiveTab = _b === void 0 ? 0 : _b;
    var _c = React.useState(initialActiveTab), activeTab = _c[0], setActiveTab = _c[1];
    useEffect(function () {
        setActiveTab(initialActiveTab);
    }, [initialActiveTab]);
    return (React.createElement("div", { className: styles.tabsWrapper },
        React.createElement(TabsContext.Provider, { value: { activeTab: activeTab, setActiveTab: setActiveTab } },
            React.createElement("div", { className: styles.tabsHeader }, tabs.map(function (tab, index) { return (React.createElement(Tab, { key: index, label: tab.label, index: index })); })),
            React.createElement("div", { className: styles.tabsContent }, tabs.map(function (tab, index) { return (React.createElement(TabContent, { key: index, index: index }, tab.content)); })))));
};
//# sourceMappingURL=Tabs.js.map