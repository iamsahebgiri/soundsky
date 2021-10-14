import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MainLayout from "layouts/main";
import Image from "next/image";
import * as React from "react";

const Item = styled("div")(({ theme }) => ({
  color: theme.palette.grey[700],
  fontWeight: 800,
  "& img": {
    borderRadius: theme.shape.borderRadius,
  },
}));

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gridGap: theme.spacing(2),
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
