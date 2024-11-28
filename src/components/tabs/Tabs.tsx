import React from "react";
import { Tabs as MUITabs, Tab, styled, Theme } from "@mui/material";

interface TabsProps {
  value: number;
  onChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: number,
  ) => void;
}

type TabProps = TabsProps & React.ComponentProps<typeof MUITabs>;

const CustomTabs = styled(MUITabs)(
  ({ theme, selected }: { theme: Theme; selected?: boolean }) => ({
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 20,
    padding: theme.spacing(0.5),
    minHeight: 32,
    "& .MuiTabs-indicator": {
      display: "none", // Hide the default indicator
    },
  }),
);

const CustomTab = styled(Tab)(
  ({ theme, selected }: { theme: Theme; selected?: boolean }) => ({
    textTransform: "none",
    minHeight: 32,
    padding: "0 20px",
    borderRadius: 20,
    border: selected ? `1px solid ${theme.palette.divider}` : "none",
    color: selected ? theme.palette.text.primary : theme.palette.text.disabled,
    backgroundColor: selected
      ? theme.palette.background.default
      : theme.palette.background.default,
    "&:hover": {
      backgroundColor: selected
        ? theme.palette.action.hover
        : theme.palette.action.focus,
    },
  }),
);

const Tabs = ({ value, onChange, ...rest }: TabProps) => {
  return (
    <CustomTabs value={value} onChange={onChange} {...rest}>
      <CustomTab id="treatment" label="In treatment" />
      <CustomTab id="deactivated" label="Deactivated" />
    </CustomTabs>
  );
};

export default Tabs;
