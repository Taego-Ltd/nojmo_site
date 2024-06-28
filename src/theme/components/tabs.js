import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { tabsAnatomy as parts } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  tab: {
    fontWeight: "semibold", // change the font weight
  },
});

const variants = {
  custombackground: definePartsStyle({
    tab: {
      color: "generic.white",
      _selected: {
        color: "generic.white",
        bg: "teal.500",
        borderRadius: "24px",
      },
    },
  }),
  unstyled: definePartsStyle({
    tab: {
      _selected: {},
    },
  }),
};

const Tab = defineMultiStyleConfig({
  baseStyle,

  variants,
  defaultProps: { size: "", variant: "unstyled" },
});
export default Tab;
