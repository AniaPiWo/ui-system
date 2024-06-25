import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
} as Meta;

const tabs = [
  {
    label: "Breakfast",
    content:
      "Breakfast Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
  },
  {
    label: "Lunches",
    content:
      "Lunches Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
  },
  {
    label: "Brunches",
    content:
      "Brunches Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
  },
  {
    label: "Dinners",
    content:
      "Dinners Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
  },
  {
    label: "Snacks",
    content:
      "Snacks Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
  },
  {
    label: "Drinks",
    content:
      "Drinks Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum quidem iusto velit suscipit labore, doloremque magnam quis, libero architecto quos officia, tempora tenetur corporis beatae repellat blanditiis aliquam ipsa earum explicabo deleniti ipsum. Voluptate voluptatibus, placeat ipsum aliquid, voluptatum, enim ducimus provident dignissimos dolorum harum dolore exercitationem reprehenderit quisquam?",
  },
];

const Template: Story = (args) => <Tabs tabs={[]} {...args} />;

export const TabsStory = Template.bind({});
TabsStory.args = {
  initialActiveTab: 2,
  tabs: tabs,
};
