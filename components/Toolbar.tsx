import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function Toolbar({ children }: any) {
  return (
    <Flex h="14" px="4" alignItems="center" justifyContent="flex-start">
      {children}
    </Flex>
  );
}
