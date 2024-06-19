import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
} as Meta;

const Template: Story = (args) => <Tabs tabs={[]} {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: "Tab 1", content: "Content 1" },
    { label: "Tab 2", content: "Content 2" },
    { label: "Tab 3", content: "Content 3" },
  ],
  initialActiveTab: 0,
};

export const WithCustomInitialTab = Template.bind({});
WithCustomInitialTab.args = {
  tabs: [
    { label: "Tab 1", content: "Content 1" },
    { label: "Tab 2", content: "Content 2" },
    { label: "Tab 3", content: "Content 3" },
  ],
  initialActiveTab: 1,
};

export const DynamicTabs = Template.bind({});
DynamicTabs.args = {
  tabs: Array.from({ length: 5 }, (_, index) => ({
    label: `Tab ${index + 1}`,
    content: `Content ${index + 1}`,
  })),
  initialActiveTab: 0,
};
