import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { IconifyIcon } from "@iconify/react";
import NextLink from "next/link";
import { useRouter } from "next/router";


interface NavItemProps {
  item: {
    href: string;
    title: string;
    icon: IconifyIcon | JSX.Element;
  };
}

const NavItem = ({ item }: NavItemProps) => {
  const { href, icon, title } = item;
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <Link
        width="full"
        sx={{
          _hover: {
            bgColor: useColorModeValue("indigo.50", "gray.700"),
          },
          _focus: {
            boxShadow: "none",
          },
        }}
        rounded="md"
      >
        <Flex
          alignItems="center"
          bgColor={isActive ? useColorModeValue("indigo.100", "gray.700") : ""}
          px="3"
          py="1.5"
          rounded="md"
        >
          <Box
            color={
              isActive
                ? useColorModeValue("indigo.700", "indigo.200")
                : useColorModeValue("gray.600", "gray.500")
            }
          >
            {icon}
          </Box>
          <Text
            color={
              isActive
                ? useColorModeValue("indigo.700", "indigo.200")
                : useColorModeValue("gray.600", "gray.500")
            }
            fontWeight={isActive ? "medium" : ""}
            ml="3"
            fontSize="15px"
          >
            {title}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default NavItem;
