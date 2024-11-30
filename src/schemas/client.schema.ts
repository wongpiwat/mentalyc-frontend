import { z as zod } from "zod";
import { nanoid } from "nanoid";

export const clientSchema = zod.object({
  id: zod.string(),
  clientType: zod.string().min(1, { message: "clientType is required" }),
  clientName: zod.string().min(1, { message: "clientName is required" }),
  clientName2: zod.string().min(1, { message: "clientName2 is required" }),
  pronouns: zod.string().min(1, { message: "pronouns is required" }),
  yearOfBirth: zod.string().min(1, { message: "yearOfBirth is required" }),
  diagnosis: zod.string().min(1, { message: "diagnosis is required" }),
  highRiskClient: zod.boolean(),
  extraNotes: zod.string().min(0, { message: "extraNotes is required" }),
});

export type Values = zod.infer<typeof clientSchema>;

export const defaultValues = {
  id: nanoid().toString().slice(0, 7), // Generate random id with 7 characters
  clientType: "",
  clientName: "",
  clientName2: "",
  pronouns: "",
  yearOfBirth: "",
  diagnosis: "",
  highRiskClient: false,
  extraNotes: "",
} satisfies Values;
