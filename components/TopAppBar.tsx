import {
  Box,
  Icon,
  IconButton,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import DarkModeButton from "components/DarkModeButton";
import Toolbar from "components/Toolbar";
import { DRAWER_WIDTH } from "config/constants";
import * as React from "react";
import { HiOutlineCog } from "react-icons/hi";
import { MdMenu } from "react-icons/md";

interface TopAppBarProps {
  onOpen: () => void;
}

export default function TopAppBar({ onOpen }: TopAppBarProps) {
  return (
    <Box
      position="fixed"
      h="14"
      bgColor={useColorModeValue("white", "gray.900")}
      zIndex="10"
      ml={{ sm: `${DRAWER_WIDTH}px` }}
      width={{ base: "full", sm: `calc(100% - ${DRAWER_WIDTH}px)` }}
    >
      <Toolbar>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          rounded="full"
          aria-label="open drawer"
          icon={<Icon h="6" w="6" as={MdMenu} />}
          display={{ sm: "none" }}
        />
        <Spacer />
        <DarkModeButton />
        <IconButton
          variant="ghost"
          rounded="full"
          aria-label="Settings"
          icon={<Icon h="6" w="6" as={HiOutlineCog} />}
        />
      </Toolbar>
    </Box>
  );
}
