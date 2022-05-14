import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MainLayout from "layouts/main";
import Image from "next/image";
import * as React from "react";

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gridGap: theme.spacing(2),
}));

const Item = ({ children }: any) => {
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
    >
      {children}
    </Box>
  );
};

export default function Index() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <GridContainer>
          {Array.from({ length: 30 }).map((_, i) => (
            <Item key={i}>
              <Image
                src="https://i.scdn.co/image/ab67706f000000033956f6d006763a6ee42c1bbf"
                alt="Picture of the author"
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL="https://i.scdn.co/image/ab67616d0000485169154eeb4cc75a6008013552"
              />
              <Typography>Rahman Ruling 90s</Typography>
            </Item>
          ))}
        </GridContainer>
        <Box pb="4rem" />
      </Container>
    </MainLayout>
  );
}
