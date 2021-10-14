import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Logo from "components/Logo";
import Toolbar from "components/Toolbar";
import { DRAWER_WIDTH } from "config/constants";
import sidebarConfig from "config/SidebarConfig";
import Link from "next/link";
import * as React from "react";
import NavItem from "./NavItem";
import Scrollbar from "./ScrollBar";

interface Props {
  isOpen: boolean;
  onClose(): void;
}

export default function Sidebar(props: Props) {
  const { isOpen, onClose } = props;

  const drawerContent = (
    <>
      <Box
        w={`${DRAWER_WIDTH - 1}px`}
        position="fixed"
        h="14"
        bgColor={useColorModeValue("gray.50", "gray.800")}
      >
        <Toolbar>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </Toolbar>
      </Box>
      <Toolbar />
      <Scrollbar>
        <Box py="3" px="4">
          <Text
            fontSize="14px"
            color={useColorModeValue("gray.500", "gray.400")}
            fontWeight="medium"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Library
          </Text>
        </Box>
        <VStack spacing="0" px="4">
          {sidebarConfig.map((item) => (
            <NavItem item={item} key={item.href} />
          ))}
        </VStack>
      </Scrollbar>
    </>
  );

  const PermanentDrawer = () => (
    <Box
      display={{ base: "none", sm: "block" }}
      w={DRAWER_WIDTH}
      h="100vh"
      position="fixed"
    >
      {drawerContent}
    </Box>
  );

  return (
    <Box
      as="nav"
      bg={useColorModeValue("gray.50", "gray.800")}
      width={{ sm: DRAWER_WIDTH }}
      h={{ sm: "100vh" }}
      position="fixed"
      flexShrink={{ sm: 0 }}
      borderRight="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <PermanentDrawer />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bgColor={useColorModeValue("gray.50", "gray.800")}
          maxW={60}
        >
          {drawerContent}
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
