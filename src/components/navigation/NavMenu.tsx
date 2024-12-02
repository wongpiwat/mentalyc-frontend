import React from "react";
import { Box, Button, styled, Theme } from "@mui/material";

const NavContainerStyled = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const NavItemStyled = styled(Button)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    height: 64,
    fontSize: 16,
    fontWeight: selected ? "bold" : "normal",
    color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
    borderBottom: selected ? `3px solid ${theme.palette.primary.main}` : "none",
    borderRadius: 0,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }),
);

interface TabContainerProps {
  children: React.ReactNode;
}

const NavContainer = ({ children }: TabContainerProps) => {
  return <NavContainerStyled>{children}</NavContainerStyled>;
};

interface TabItemProps {
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavItem = ({ selected, onClick, children }: TabItemProps) => {
  return (
    <NavItemStyled selected={selected} onClick={onClick}>
      {children}
    </NavItemStyled>
  );
};

export { NavContainer, NavItem };
