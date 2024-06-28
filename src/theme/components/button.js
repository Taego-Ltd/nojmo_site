import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer", flexDirection: "row" });

const sizes = {
  sm: defineStyle({
    h: "48px",
    px: "12px",
  }),
  xs: defineStyle({
    h: "48px",
    fontSize: "18px",
    px: "24px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      teal_500: {
        bg: "teal.500",
        color: "generic.white",
      },
      neutral_900: {
        bg: "neutral.900",
        color: "generic.white",
      },
      neutral_50: {
        bg: "neutral.50",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["neutral_50"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;
