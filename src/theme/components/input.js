import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  field: {
    cursor: "text",
    color: "neutral.500",
    fontSize: "18px",
    fontWeight: 500,
    borderColor: "neutral.300",
    borderWidth: "1px",
    borderRadius: "28px",
  },
});

const sizes = {
  xs: defineStyle({
    field: {
      fontSize: "18px",
      height: "56px",
      px: "24px",
    },
  }),
};

const variants = {
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      neutral_300: {
        field: {
          borderColor: "neutral.300",
          borderWidth: "1px",
          borderStyle: "solid",
          color: "neutral.500",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["neutral_300"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "outline",
    size: "xs",
  },
});
export default Input;
