import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import CreateClientModal from "@/components/modal/CreateClientModal";

const meta = {
  title: "Example/CreateClientModal",
  component: CreateClientModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClose: fn(), onSubmit: fn() },
} satisfies Meta<typeof CreateClientModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    open: false,
  },
};
