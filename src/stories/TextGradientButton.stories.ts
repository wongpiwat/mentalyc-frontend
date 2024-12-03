import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TextGradientButton from "@/components/button/TextGradientButton";

const meta = {
  title: "Example/TextGradientButton",
  component: TextGradientButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof TextGradientButton>;

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
