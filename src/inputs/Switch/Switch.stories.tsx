import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Switch as MySwitch, SwitchProps } from "./Switch";

export default {
  component: MySwitch,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta;

export const Switch: Story<SwitchProps> = (args) => {
  const [checked, setChecked] = React.useState(args.checked);

  React.useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    args.onChange(newChecked);
  };

  return <MySwitch {...args} checked={checked} onChange={handleChange} />;
};

Switch.args = {
  id: "switch",
  checked: false,
  disabled: false,
};
