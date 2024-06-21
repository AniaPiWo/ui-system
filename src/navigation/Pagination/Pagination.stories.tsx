import React from "react";
import { Meta, Story } from "@storybook/react";
import { Pagination, PaginationProps } from "./Pagination";

export default {
  title: "Navigation/Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;
export const PaginationStory = Template.bind({});

PaginationStory.args = {
  maxPages: 10,
  currentPage: 1,
  onChange: (page) => {
    console.log(`Page changed to: ${page}`);
  },
};
