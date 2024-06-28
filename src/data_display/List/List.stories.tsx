import React from "react";
import { Meta, Story } from "@storybook/react";
import { List, ListItem, ListHeader, ListText, ListProps } from "./List";
import Avatar from "../Avatar/Avatar";
import { Switch } from "../../inputs/Switch/Switch";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";

export default {
  title: "DataDisplay/List",
  component: List,
} as Meta;

export const TextStory: Story<ListProps> = () => (
  <List>
    <ListItem>
      <ListHeader>List item</ListHeader>
      <ListText>
        Supporting line text lorem ipsum dolor sit amet, consectetur Lorem ipsum
      </ListText>
    </ListItem>
  </List>
);

export const HeaderOnlyStory: Story<ListProps> = () => (
  <List>
    <ListItem>
      <ListHeader>List item</ListHeader>
    </ListItem>
  </List>
);

export const AvatarStory: Story<ListProps> = () => (
  <List>
    <ListItem>
      <Avatar size="big" alt="Avatar" />
    </ListItem>
    <ListItem>
      <ListHeader>List item</ListHeader>
      <ListText>
        Supporting line text lorem ipsum dolor sit amet, consectetur
      </ListText>
    </ListItem>
  </List>
);

export const SwitchStory: Story<ListProps> = () => (
  <List>
    <ListItem>
      <Switch
        id="switch-1"
        checked={false}
        onChange={() => {
          console.log("switched");
        }}
      />
    </ListItem>
    <ListItem>
      <ListHeader>List item</ListHeader>
    </ListItem>
  </List>
);

export const CheckboxStory: Story<ListProps> = () => (
  <List>
    <ListItem>
      <ListHeader>List item</ListHeader>
    </ListItem>
    <ListItem>
      <Checkbox
        id="checkbox-1"
        checked={true}
        label="Checkbox item"
        onChange={() => {
          console.log("checked");
        }}
      />
    </ListItem>
  </List>
);
