import { SimpleGrid } from "@chakra-ui/layout";
import Card from "components/Card";
import BaseLayout from "layouts/base";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <SimpleGrid minChildWidth="210px" spacing="4">
        <Card height="160px" />
        <Card height="160px" />
        <Card height="160px" />
        <Card height="160px" />
        <Card height="160px" />
        <Card height="160px" />
      </SimpleGrid>
    </BaseLayout>
  );
};

export default Home;
