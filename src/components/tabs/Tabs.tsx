import React from "react";
import { Tabs as MUITabs, Tab as MUITab, styled, Theme } from "@mui/material";

const TabsStyled = styled(MUITabs)(
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

const TabStyled = styled(MUITab)(
  ({ theme, selected }: { theme: Theme; selected?: boolean }) => ({
    fontSize: 14,
    fontWeight: 500,
    textTransform: "none",
    minHeight: 32,
    padding: "0 20px",
    borderRadius: 20,
    border: selected ? `1px solid ${theme.palette.divider}` : "none",
    "&.Mui-selected": {
      color: theme.palette.common.black,
    },
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

interface TabsProps {
  value: number;
  items: { label: string; size: number }[];
  onChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: number,
  ) => void;
}

type TabProps = TabsProps & React.ComponentProps<typeof MUITabs>;

const Tabs = ({ value, items, onChange, ...rest }: TabProps) => {
  return (
    <TabsStyled value={value} onChange={onChange} {...rest}>
      {items.map((item, index) => (
        <TabStyled
          key={index}
          label={`${item.label} (${item.size})`}
          value={index}
        />
      ))}
    </TabsStyled>
  );
};

export default Tabs;
