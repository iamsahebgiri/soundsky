import { mode } from "@chakra-ui/theme-tools";

const Heading = {
  baseStyle: (props) => ({
    color: mode("gray.800", "gray.100")(props),
  }),
};

export default Heading;
