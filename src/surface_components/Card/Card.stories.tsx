import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, CardImage, CardContent } from "./Card";
import styles from "./Card.module.css";
import { Button } from "../../inputs";
import cardimg from "../../assets/cardimg.jpg";

export default {
  title: "SurfaceComponents/Card",
  component: Card,
} as Meta;

const Template: Story = (args) => (
  <Card {...args}>
    <CardImage url={cardimg} alt="Card Image" />
    <CardContent
      title="Card name"
      description="Card description goes here and it can be as long as it needs and so on."
    >
      <div className={styles.buttonbox}>
        <Button variant="primary" onClick={() => console.log("clicked")}>
          Primary button
        </Button>
        <Button variant="secondary" onClick={() => console.log("clicked")}>
          Secondary button
        </Button>
      </div>
    </CardContent>
  </Card>
);

export const CardStories = Template.bind({});
CardStories.args = {
  fullWidth: false,
};
