import { Meta, Story } from "@storybook/react";
import * as React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableProps,
} from "./Table";

export default {
  component: Table,
  title: "DataDisplay/Table",
} as Meta;

const rows = [
  { name: "Bulldog", calories: 10, fat: 20, carbs: 30, protein: 40 },
  { name: "Beagle", calories: 15, fat: 25, carbs: 35, protein: 45 },
];

const Template: Story<TableProps> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="left">Dog’s breed</TableCell>
        <TableCell align="right">Name</TableCell>
        <TableCell align="right">Weight (kg)</TableCell>
        <TableCell align="right">Height (cm)</TableCell>
        <TableCell align="right">Chip</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const TableStory = Template.bind({});
TableStory.args = {};
