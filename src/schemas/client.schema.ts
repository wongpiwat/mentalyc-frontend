import { z as zod } from "zod";
import { nanoid } from "nanoid";

export const clientSchema = zod.object({
  id: zod.string(),
  clientName: zod.string().min(1, { message: "itemName is required" }),
  clinicianName: zod.string().min(1, { message: "itemName is required" }),
  clientType: zod.string().min(1, { message: "categoryCode is required" }),
  treatmentPlan: zod.string().min(1, { message: "categoryCode is required" }),
  lastSession: zod.string().min(1, { message: "categoryCode is required" }),
  unsavedNotes: zod.string().min(1, { message: "categoryCode is required" }),
});

export type Values = zod.infer<typeof clientSchema>;

export const defaultValues = {
  id: nanoid().toString().slice(0, 7), // Generate random id with 7 characters
  clientName: "",
  clinicianName: "",
  clientType: "",
  treatmentPlan: "",
  lastSession: "",
  unsavedNotes: "",
} satisfies Values;
