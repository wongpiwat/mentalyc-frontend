import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Radio from "@/components/radio/Radio";

const meta = {
  title: "Example/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onChange: fn(),
    options: [
      { label: "He/Him", value: "HE_HIM" },
      { label: "She/Her", value: "SHE_HER" },
      { label: "They/Them", value: "THEY_THEM" },
    ],
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Column: Story = {
  args: {
    label: "Pronouns",
    row: false,
  },
};

export const Row: Story = {
  args: {
    label: "Pronouns",
    row: true,
  },
};

export const Required: Story = {
  args: {
    label: "Pronouns",
    row: true,
    required: true,
  },
};
