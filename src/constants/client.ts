interface ClientType {
  label: string;
  value: number;
  color: string;
}

export const CLIENT_TYPE: { [key: string]: ClientType } = {
  INDIVIDUAL: { label: "Individual", value: 1, color: "valhalla" },
  COUPLE: { label: "Couple", value: 2, color: "info" },
  FAMILY: { label: "Family", value: 3, color: "kenyanCopper" },
  CHILD: { label: "Child", value: 4, color: "success" },
  GROUP: { label: "Group", value: 5, color: "warning" },
};

export const DIAGNOSIS_OPTIONS = [
  { label: "Adjustment disorder with anxiety", tag: "F43.22", value: 1 },
  { label: "Anxiety", tag: "F42.54", value: 2 },
  { label: "Disorder", tag: "F21.276", value: 3 },
];

export const CLIENT_TYPE_OPTIONS = [
  { label: "Individual", value: "INDIVIDUAL", color: "valhalla" },
  { label: "Couple", value: "COUPLE", color: "info" },
];

export const PRONOUNS_OPTIONS = [
  { label: "He/Him", value: "HE_HIM" },
  { label: "She/Her", value: "SHE_HER" },
  { label: "They/Them", value: "THEY_THEM" },
];
