import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Icon } from "@iconify/react";
import search24Regular from "@iconify/icons-fluent/search-24-regular";

export default function Searchbar() {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: {
          xs: "100%",
          sm: "50%",
        },
        background: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[800]
            : theme.palette.grey[100],
      }}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <Icon icon={search24Regular} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search tracks"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
