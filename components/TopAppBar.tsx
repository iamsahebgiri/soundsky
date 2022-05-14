import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import DarkModeButton from "components/DarkModeButton";
import Searchbar from "components/SearchBar";
import { Icon } from "@iconify/react";
import navigation24Regular from "@iconify/icons-fluent/navigation-24-regular";
import settings24Regular from "@iconify/icons-fluent/settings-24-regular";

import { DRAWER_WIDTH } from "utils/constants";
import { Theme } from "@mui/material";

interface TopAppBarProps {
  handleDrawerToggle: () => void;
}

export default function TopAppBar({ handleDrawerToggle }: TopAppBarProps) {
  return (
    <AppBar
      elevation={0}
      color="default"
      sx={{
        bgcolor: (theme: Theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.common.white,
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
        borderBottom: "1px solid",
        borderBottomColor: (theme: Theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[800]
            : theme.palette.grey[200],
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Icon icon={navigation24Regular} />
        </IconButton>
        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={1}>
          <DarkModeButton />
          {/* <IconButton color="inherit">
            <Icon icon={settings24Regular} />
          </IconButton> */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
