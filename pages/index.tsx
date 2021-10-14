import { Container, SimpleGrid } from "@chakra-ui/layout";
import MainLayout from "layouts/main";
import Image from "next/image";
import * as React from "react";
import Card from "components/Card";
import { Box } from "@chakra-ui/react";

export default function Index() {
  return (
    <MainLayout>
      <Container maxW="container.xl">
        <SimpleGrid minChildWidth="150px" spacing="4">
          {Array.from({ length: 30 }).map((_, i) => (
            <Box key={i}>
              <Box sx={{ " img": { borderRadius: "md" } }}>
                <Image
                  src="https://i.scdn.co/image/ab67616d00001e0269154eeb4cc75a6008013552"
                  alt="Picture of the author"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="https://i.scdn.co/image/ab67616d0000485169154eeb4cc75a6008013552"
                />
              </Box>
              Rahman Ruling 90s
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      {/* <Container maxWidth="xl">
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
      </Container> */}
    </MainLayout>
  );
}
