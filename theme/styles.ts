import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("gray.900", "white")(props),
      bg: mode("white", "gray.900")(props),
      fontFeatureSettings: "'cv02','cv03','cv04' ,'cv11'",
    },
  }),
};

export default styles;
