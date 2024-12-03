import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import GradientButton from "@/components/button/GradientButton";

const meta = {
  title: "Example/GradientButton",
  component: GradientButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof GradientButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "contained",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "outlined",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small",
  },
};
