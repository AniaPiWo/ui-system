import React from "react";
import { Meta, Story } from "@storybook/react";
import { Accordion, AccordionProps } from "./Accordion";

export default {
  title: "SurfaceComponents/Accordion",
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const AccordionStory = Template.bind({});
AccordionStory.args = {
  header: "Accordion 1",
  content: "This accordion contains a long content. ".repeat(10),
  defaultOpen: false,
};
