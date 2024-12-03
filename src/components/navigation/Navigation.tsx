import React, { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Chip,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Stack,
} from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import GradientButton from "@/components/button/GradientButton";
import TextGradientButton from "@/components/button/TextGradientButton";
import { NavContainer, NavItem } from "@/components/navigation/NavMenu";
import { NAV_MENU, NAV_SETTINGS } from "@/constants/navigation";

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#FFF" }} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack flexDirection="row" flexGrow={0}>
            <Stack flexDirection="row" gap={2} alignItems="center">
              <IconButton sx={{ p: 0 }}>
                <Image alt="logo" width={42} height={24} src="Logo.svg" />
              </IconButton>
              <Chip
                label="PRO"
                size="small"
                className="bg-chip-primary rounded-md"
              />
            </Stack>
          </Stack>

          <Stack flexDirection="row" justifyContent="center" flexGrow={1}>
            <NavContainer>
              {NAV_MENU.map((tab, index) => (
                <NavItem
                  key={index}
                  selected={selectedTab === index}
                  onClick={() => setSelectedTab(index)}
                >
                  {tab}
                </NavItem>
              ))}
              <Stack justifyContent="center">
                <TextGradientButton>Earn $80</TextGradientButton>
              </Stack>
            </NavContainer>
          </Stack>

          <Box flexGrow={0}>
            <Stack flexDirection="row" alignItems="center" gap={2}>
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <NoteIcon color="primary" />
                <Typography color="textSecondary">12 notes left </Typography>
                <HelpOutlineIcon color="primary" />
              </Stack>

              <GradientButton>Become SUPER</GradientButton>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  <ExpandMoreIcon
                    color="primary"
                    sx={{ transform: anchorElUser ? "rotate(180deg)" : 0 }}
                  />
                </IconButton>
              </Tooltip>
            </Stack>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {NAV_SETTINGS.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
