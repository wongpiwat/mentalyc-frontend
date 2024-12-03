import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Tabs from "@/components/tabs/Tabs";

const meta = {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 0,
    items: [
      { label: "In treatment", size: 20 },
      { label: "Deactivated", size: 10 },
    ],
  },
};

export const Secondary: Story = {
  args: {
    value: 1,
    items: [
      { label: "In treatment", size: 20 },
      { label: "Deactivated", size: 10 },
    ],
  },
};
