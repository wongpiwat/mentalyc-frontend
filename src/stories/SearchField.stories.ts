import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SearchField from "@/components/search/SearchField";

const meta = {
  title: "Example/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Client name",
    placeholder: "Client name...",
  },
};
