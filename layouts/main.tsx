import * as React from "react";
import Sidebar from "components/SideBar";
import TopAppBar from "components/TopAppBar";
import Toolbar from "components/Toolbar";
import BaseLayout from "./base";

import { Flex, Box, useDisclosure } from "@chakra-ui/react";
import { DRAWER_WIDTH } from "config/constants";

export default function MainLayout({ children }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BaseLayout>
      <Flex>
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <TopAppBar onOpen={onOpen} />

        <Box ml={{ sm: `${DRAWER_WIDTH}px` }} as="main" flexGrow={1} py={3}>
          <Toolbar />
          {children}
        </Box>
      </Flex>
    </BaseLayout>
  );
}
