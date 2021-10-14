import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import SimpleBarReact from "simplebar-react";

export default function Scrollbar({ children, sx, ...other }: any) {
  let isMobile = false;
  if (process.browser) {
    isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      );
  }

  if (isMobile) {
    return <Box overflowX="auto">{children}</Box>;
  }

  return (
    <Flex
      direction="column"
      flexGrow={1}
      maxH="100%"
      overflow="hidden"
      sx={{
        "& .simplebar-scrollbar": {
          "&:before": {
            backgroundColor: useColorModeValue("gray.300", "gray.700"),
          },
          "&.simplebar-visible:before": {
            opacity: 1,
          },
        },
        "& .simplebar-track.simplebar-vertical": {
          width: 3,
        },
        "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
          height: 6,
        },
        "& .simplebar-mask": {
          zIndex: "inherit",
        },
      }}
    >
      <SimpleBarReact
        style={{ maxHeight: `calc(100vh - 60px)` }}
        timeout={500}
        clickOnTrack={false}
      >
        {children}
      </SimpleBarReact>
    </Flex>
  );
}
