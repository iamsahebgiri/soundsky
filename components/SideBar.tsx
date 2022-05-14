import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Toolbar from "@mui/material/Toolbar";
import Logo from "components/Logo";
import Scrollbar from "components/ScrollBar";
import { DRAWER_WIDTH } from "utils/constants";
import NavItem from "./NavItem";
import { libraries, playlists } from "config/SidebarConfig";
import { Theme } from "@mui/material/styles";

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export default function Sidebar(props: Props) {
  const { mobileOpen, handleDrawerToggle } = props;

  const drawer = (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          py: "1rem",
          px: "1rem",
        }}
        disableGutters
      >
        <Logo />
      </Toolbar>
      <Scrollbar>
        <List
          subheader={<ListSubheader disableSticky>Library</ListSubheader>}
          sx={{ px: "0.2rem" }}
        >
          {libraries.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </List>
        <List
          subheader={<ListSubheader disableSticky>Playlists</ListSubheader>}
          sx={{ px: "0.2rem" }}
        >
          {playlists.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </List>
      </Scrollbar>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        pb="4.5rem"
      />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label="Libraries and playlists"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },

          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            bgcolor: (theme: Theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.grey[800]
                : theme.palette.grey[50],
            border: (theme: Theme) => theme.palette.mode === "dark" && "none",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
