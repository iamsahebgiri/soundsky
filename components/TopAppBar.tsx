import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import DarkModeButton from "components/DarkModeButton";
import Searchbar from "components/SearchBar";
import { HiOutlineCog } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { DRAWER_WIDTH } from "utils/constants";

interface TopAppBarProps {
  handleDrawerToggle: () => void;
}

export default function TopAppBar({ handleDrawerToggle }: TopAppBarProps) {
  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "grey[200]",
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
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
          <MdMenu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={1}>
          <Searchbar />
          <DarkModeButton />
          <IconButton color="inherit">
            <HiOutlineCog />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
