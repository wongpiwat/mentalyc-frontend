import * as React from "react";
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
} from "@mui/material";

import Image from "next/image";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const pages = ["New notes", "Clients", "Clinicians", "Templates"];
const settings = ["Profile", "Settings", "Logout"];

const MainNavigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#FFF" }} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack
            flexDirection="row"
            gap={10}
            justifyContent="space-between"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            <Stack flexDirection="row" gap={2} alignItems="center">
              <IconButton sx={{ p: 0 }}>
                <Image alt="logo" width={42} height={24} src="Logo.svg" />
              </IconButton>
              <Chip
                label="PRO"
                size="small"
                sx={{ backgroundColor: "#F8CDD9", borderRadius: 2 }}
              />
            </Stack>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Stack>

          <Box sx={{ flexGrow: 0 }}>
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
export default MainNavigation;
