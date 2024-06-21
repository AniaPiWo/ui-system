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
    {
      label: "Tab 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
    },
    {
      label: "Tab 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
    },
    {
      label: "Tab 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
    },
  ],
  initialActiveTab: 0,
};

export const WithCustomInitialTab = Template.bind({});
WithCustomInitialTab.args = {
  tabs: [
    {
      label: "Tab 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
    },
    {
      label: "Tab 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
    },
    {
      label: "Tab 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
    },
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
