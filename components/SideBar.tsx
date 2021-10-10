import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Toolbar from "@mui/material/Toolbar";
import Logo from "components/Logo";
import Scrollbar from "components/ScrollBar";
import { MdInbox, MdMail } from "react-icons/md";
import { DRAWER_WIDTH } from "utils/constants";

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
              Settings
            </ListSubheader>
          }
        >
          {[
            "Inbox",
            "Starred",
            "Send email",
            "Drafts",
            "Inbox",
            "Starred",
            "Send email",
            "Drafts",
            "Inbox",
            "Starred",
            "Send email",
            "Drafts",
          ].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? <MdInbox /> : <MdMail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <MdInbox /> : <MdMail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Scrollbar>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
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
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
