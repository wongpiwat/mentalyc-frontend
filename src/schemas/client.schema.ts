import { z as zod } from "zod";
import { nanoid } from "nanoid";
import { CLIENT_TYPE_OPTIONS, DIAGNOSIS_OPTIONS, PRONOUNS_OPTIONS } from "@/constants/client";

export const clientSchema = zod.object({
  id: zod.string(),
  clientType: zod.string().min(1, { message: "Client type is required" }),
  clientName: zod.string().min(1, { message: "Client name is required" }),
  clientName2: zod.string().optional(),
  pronouns: zod.string().min(1, { message: "Pronouns is required" }),
  yearOfBirth: zod.string().optional(),
  diagnosis: zod.number().min(0, { message: "Diagnosis is required" }),
  highRiskClient: zod.boolean(),
  extraNotes: zod.string().optional(),
});

export type Values = zod.infer<typeof clientSchema>;

export const defaultValues = {
  id: nanoid().toString().slice(0, 7), // Generate random id with 7 characters
  clientType: CLIENT_TYPE_OPTIONS[0].value,
  clientName: "",
  clientName2: "",
  pronouns: PRONOUNS_OPTIONS[0].value,
  yearOfBirth: "",
  diagnosis: DIAGNOSIS_OPTIONS[0].value,
  highRiskClient: false,
  extraNotes: "",
} satisfies Values;
