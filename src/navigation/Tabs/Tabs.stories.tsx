import { Tab, Tabs } from "./Tabs";
import { Meta, Story } from "@storybook/react";
import * as React from "react";

export default {
  component: Tabs,
  title: "Navigation/Tabs",
} as Meta;

const Template: Story<{ activeTab: number }> = (args) => {
  const tabs = [
    { label: "Breakfast" },
    { label: "Lunches" },
    { label: "Brunches" },
    {
      label: "Dinners",
    },
    { label: "Snacks" },
    { label: "Drinks" },
  ];

  return (
    <Tabs activeTab={args.activeTab}>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} index={index} />
      ))}
    </Tabs>
  );
};

export const TabsStory = Template.bind({});
TabsStory.args = {
  activeTab: 1,
};
