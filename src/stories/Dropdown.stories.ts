import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Dropdown from "@/components/dropdown/Dropdown";

const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: fn(),
    value: 1,
    options: [
      { label: "Adjustment disorder with anxiety", tag: "F43.22", value: 1 },
      { label: "Anxiety", tag: "F42.54", value: 2 },
      { label: "Disorder", tag: "F21.276", value: 3 },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Diagnosis",
  },
};
