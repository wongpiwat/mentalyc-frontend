import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import InTreatmentTable from "@/components/table/InTreatmentTable";

const CLIENTS = [
  {
    id: "CLIENT-1",
    clientName: "Georgi",
    clinicianName: "Georgia Smith",
    clientType: "GROUP",
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
    clientType: "CHILD",
    treatmentPlan: "Not saved",
    lastSession: "2022-11-19T19:42:16.912Z",
    unsavedNotes: "3213",
    status: true,
  },
];

const meta = {
  title: "Example/InTreatmentTable",
  component: InTreatmentTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    count: 10,
    page: 0,
    rowsPerPage: 10,
    rows: CLIENTS,
    onPageChange: fn(),
    onRowsPerPageChange: fn(),
  },
} satisfies Meta<typeof InTreatmentTable>;

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
