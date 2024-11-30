import React, { useState } from "react";
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
  Button,
  Tooltip,
  MenuItem,
  Stack,
  styled,
  Theme,
} from "@mui/material";

import Image from "next/image";
import NoteIcon from "@mui/icons-material/Note";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const pages = ["New notes", "Clients", "Clinicians", "Templates"];
const settings = ["Profile", "Settings", "Logout"];

const TabContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const TabItem = styled(Button)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    textTransform: "none",
    height: 64,
    cursor: "pointer",
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
            <TabContainer>
              {pages.map((tab, index) => (
                <TabItem
                  key={index}
                  selected={selectedTab === index}
                  onClick={() => setSelectedTab(index)}
                >
                  {tab}
                </TabItem>
              ))}
              <Stack justifyContent="center">
                <Typography color="primary" sx={{ px: 2 }}>
                  Earn $80
                </Typography>
              </Stack>
            </TabContainer>
          </Stack>

          <Box flexGrow={0}>
            <Stack flexDirection="row" alignItems="center" gap={2}>
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <NoteIcon color="primary" />
                <Typography color="textSecondary">12 notes left </Typography>
                <HelpOutlineIcon color="primary" />
              </Stack>

              <Button variant="outlined" color="primary">
                Become SUPER
              </Button>

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
              {settings.map((setting) => (
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
