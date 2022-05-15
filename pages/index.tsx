import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Categories from "components/Categories";
import NewReleases from "components/NewReleases";
import MainLayout from "layouts/main";
import React from "react";
import Featured from "components/Featured";

export default function Index() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Stack spacing={4}>
          <Featured />
          <Categories />
          <NewReleases />
        </Stack>
        <Box pb="4rem" />
      </Container>
    </MainLayout>
  );
}
