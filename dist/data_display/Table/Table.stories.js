import * as React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, } from "./Table";
export default {
    component: Table,
    title: "DataDisplay/Table"
};
var rows = [
    { name: "Bulldog", calories: 10, fat: 20, carbs: 30, protein: 40 },
    { name: "Beagle", calories: 15, fat: 25, carbs: 35, protein: 45 },
];
var Template = function () { return (React.createElement(Table, null,
    React.createElement(TableHead, null,
        React.createElement(TableRow, null,
            React.createElement(TableCell, { align: "left" }, "Dog\u2019s breed"),
            React.createElement(TableCell, { align: "right" }, "Name"),
            React.createElement(TableCell, { align: "right" }, "Weight (kg)"),
            React.createElement(TableCell, { align: "right" }, "Height (cm)"),
            React.createElement(TableCell, { align: "right" }, "Chip"))),
    React.createElement(TableBody, null, rows.map(function (row) { return (React.createElement(TableRow, { key: row.name },
        React.createElement(TableCell, { align: "left" }, row.name),
        React.createElement(TableCell, { align: "right" }, row.calories),
        React.createElement(TableCell, { align: "right" }, row.fat),
        React.createElement(TableCell, { align: "right" }, row.carbs),
        React.createElement(TableCell, { align: "right" }, row.protein))); })))); };
export var TableStory = Template.bind({});
TableStory.args = {};
//# sourceMappingURL=Table.stories.js.map