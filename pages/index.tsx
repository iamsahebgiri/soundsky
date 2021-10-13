import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import MainLayout from "layouts/main";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { IconButton, ImageListItemBar, ListSubheader } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.grey[700],
  fontWeight: 800,
}));

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gridGap: 16,
}));

export default function Index() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <GridContainer>
          {Array.from({ length: 30 }).map((_, i) => (
            <Item key={i}>
              <Image
                src="https://i.scdn.co/image/ab67616d00001e0269154eeb4cc75a6008013552"
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
      </Container>
    </MainLayout>
  );
}
