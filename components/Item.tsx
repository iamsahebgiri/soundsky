import React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

export default function Item({ children, href }: any) {
  const router = useRouter();
  return (
    <Box
      sx={{
        fontWeight: 800,
        "& img": {
          borderRadius: 1,
        },
        cursor: "pointer",
        color: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[300]
            : theme.palette.grey[700],
        willChange: "transform",
        transform: "scale(1)",
        "&:active": {
          transform: "scale(0.98)",
        },
        animation: (theme) => theme.transitions.easing.easeInOut,
        WebkitTapHighlightColor: "rgba(0,0,0,0)",
      }}
      onClick={() => {
        if (href) {
          router.push(href);
        }
      }}
    >
      {children}
    </Box>
  );
}
