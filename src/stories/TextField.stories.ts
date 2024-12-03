import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TextField from "@/components/text-field/TextField";

const meta = {
  title: "Example/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Name",
    placeholder: "Client name...",
  },
};

export const Required: Story = {
  args: {
    label: "Name",
    placeholder: "Client name...",
    required: true,
  },
};

export const Number: Story = {
  args: {
    label: "Year of birth",
    type: "number",
    placeholder: "Year of birth...",
  },
};
