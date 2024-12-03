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
