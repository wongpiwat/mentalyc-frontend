interface ClientType {
  label: string;
  value: number;
  color: string;
}

export const CLIENT_TYPE: { [key: string]: ClientType } = {
  INDIVIDUAL: { label: "Individual", value: 1, color: "primary" },
  COUPLE: { label: "Couple", value: 2, color: "secondary" },
  FAMILY: { label: "Family", value: 3, color: "success" },
  CHILD: { label: "Child", value: 4, color: "warning" },
  GROUP: { label: "Group", value: 5, color: "info" },
};
