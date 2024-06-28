import { Text, Heading, Button, Tabs, Input, Container } from "./components";
import { colors, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "550px",
    md: "1050px",
    lg: "1440px",
  },
  colors,
  fonts,
  components: { Text, Heading, Button, Tabs, Input, Container },
});
export default theme;
