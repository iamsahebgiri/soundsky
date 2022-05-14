import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Theme } from "@mui/material";
import Image from "next/image";
import { Icon } from "@iconify/react";
import arrowDownload24Regular from "@iconify/icons-fluent/arrow-download-24-regular";
import play24Regular from "@iconify/icons-fluent/play-24-regular";

export default function BottomPlayer() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="default"
      sx={{
        top: "auto",
        bottom: 0,
        zIndex: { sm: 1201 },
        bgcolor: (theme: Theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          height: "4px",
          width: "100%",
          background: (theme: Theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[800]
              : theme.palette.grey[200],
        }}
      >
        <Box
          sx={{
            height: "4px",
            width: "20%",
            background: (theme: Theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.primary[800]
                : theme.palette.primary[600],
          }}
        />
      </Box>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                "& img": {
                  borderRadius: (theme: Theme) => theme.shape.borderRadius,
                },
                mr: "1rem",
              }}
            >
              <Image
                src="https://i.scdn.co/image/ab67616d00001e0269154eeb4cc75a6008013552"
                alt="Picture of the author"
                width={48}
                height={48}
                placeholder="blur"
                blurDataURL="https://i.scdn.co/image/ab67616d0000485169154eeb4cc75a6008013552"
              />
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: {
                  xs: "12rem",
                },
              }}
            >
              <Typography
                noWrap
                sx={{
                  fontSize: "0.9rem",
                  color: (theme: Theme) =>
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[100]
                      : theme.palette.grey[800],
                }}
              >
                Rahman ruling 80s Rahman ruling 80sRahman ruling 80sRahman
                ruling 80sRahman ruling 80sRahman ruling 80sRahman ruling 80s
              </Typography>
              <Typography
                noWrap
                sx={{
                  fontSize: "0.75rem",
                  color: (theme: Theme) =>
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[300]
                      : theme.palette.grey[400],
                }}
              >
                AR Rahman
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                fontSize: "0.9rem",
                color: (theme: Theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[800],
              }}
            >
              0:20 / 0:30
            </Typography>
            <IconButton onClick={() => ({})} sx={{ mx: 1 }}>
              <Icon icon={play24Regular} />
            </IconButton>
            <IconButton onClick={() => ({})}>
              <Icon icon={arrowDownload24Regular} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
