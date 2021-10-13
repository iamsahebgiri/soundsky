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
import sidebarConfig from "config/SidebarConfig";
import { Theme } from "@mui/material/styles";

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <>
      <Toolbar>
        <Logo />
      </Toolbar>
      <Scrollbar>
        <List
          subheader={
            <ListSubheader disableSticky sx={{ textTransform: "uppercase" }}>
              Library
            </ListSubheader>
          }
          sx={{ px: "1rem" }}
        >
          {sidebarConfig.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </List>
      </Scrollbar>
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
        container={container}
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
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
