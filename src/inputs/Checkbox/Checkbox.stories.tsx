import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Checkbox as MyCheckbox, CheckboxProps } from "./Checkbox";

export default {
  component: MyCheckbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = React.useState(args.checked);

  React.useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    args.onChange(newChecked);
  };

  return <MyCheckbox {...args} checked={checked} onChange={handleChange} />;
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  id: "checkbox",
  label: "Checkbox label",
  checked: false,
  disabled: false,
};
