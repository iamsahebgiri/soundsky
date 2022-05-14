import React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "utils/colorModeContext";
import { Icon } from "@iconify/react";
import weatherMoon24Regular from "@iconify/icons-fluent/weather-moon-24-regular";
import weatherSunny24Regular from "@iconify/icons-fluent/weather-sunny-24-regular";

export default function DarkModeButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Icon icon={weatherSunny24Regular} />
      ) : (
        <Icon icon={weatherMoon24Regular} />
      )}
    </IconButton>
  );
}
