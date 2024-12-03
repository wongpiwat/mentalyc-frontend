import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Chip from "@/components/chip/Chip";

const meta = {
  title: "Example/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "contained",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: "outlined",
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
};
