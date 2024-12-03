import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DeactivatedTable from "@/components/table/DeactivatedTable";

const CLIENTS = [
  {
    id: "CLIENT-1",
    clientName: "Georgi",
    clinicianName: "Georgia Smith",
    clientType: "INDIVIDUAL",
    treatmentPlan: "Not saved",
    lastSession: "2024-11-19T19:42:16.912Z",
    unsavedNotes: "3213",
    status: true,
  },
  {
    id: "CLIENT-2",
    clientName: "Ivan",
    clinicianName: "Ivan Ivanov",
    clientType: "COUPLE",
    treatmentPlan: "Not saved",
    lastSession: "2023-11-19T19:42:16.912Z",
    unsavedNotes: "3213",
    status: true,
  },
  {
    id: "CLIENT-3",
    clientName: "Petar",
    clinicianName: "Petar Petrov",
    clientType: "INDIVIDUAL",
    treatmentPlan: "Not saved",
    lastSession: "2022-11-19T19:42:16.912Z",
    unsavedNotes: "3213",
    status: true,
  },
];

const meta = {
  title: "Example/DeactivatedTable",
  component: DeactivatedTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    count: 10,
    page: 0,
    rowsPerPage: 10,
    rows: CLIENTS,
    onPageChange: fn(),
    onRowsPerPageChange: fn(),
  },
} satisfies Meta<typeof DeactivatedTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
