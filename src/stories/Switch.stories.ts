import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Switch from "@/components/switch/Switch";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {
  args: {
    label: "Primary",
    value: true,
  },
};

export const Off: Story = {
  args: {
    label: "Primary",
    value: false,
  },
};

export const NoLabel: Story = {
  args: {
    value: true,
  },
};
