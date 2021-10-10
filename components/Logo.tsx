import { Box, BoxProps } from "@mui/material";

export default function Logo({ sx }: BoxProps) {
  return (
    <Box
      component="img"
      src="/soundsky.svg"
      sx={{ height: 32, ...sx }}
    />
  );
}
