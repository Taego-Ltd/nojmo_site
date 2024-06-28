const baseStyle = {
  color: "generic.white",
  fontFamily: "Inter",
};
const sizes = {
  heading_h6_medium_desktop: {
    letterSpacing: "-0.40px",
    fontSize: "20px",
    fontWeight: 500,
    fontStyle: "bold",
  },
  heading_h5_semibold_desktop: {
    letterSpacing: "-0.48px",
    fontSize: {
      md: "24px",
      base: "24px",
      sm: "22px",
    },
    fontWeight: 600,
    fontStyle: "bold",
  },
  paragraph_large_medium: {
    fontSize: "18px",
    fontWeight: 500,
    fontStyle: "bold",
  },
  heading_h6_semibold_desktop: {
    letterSpacing: "-0.40px",
    fontSize: "20px",
    fontWeight: 600,
    fontStyle: "bold",
  },
  headingxs: {
    fontSize: {
      md: "44px",
      base: "34px",
      sm: "40px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
  headings: {
    fontSize: {
      md: "52px",
      base: "38px",
      sm: "44px",
    },
    fontWeight: 700,
    fontStyle: "bold",
  },
};
const defaultProps = {
  size: "heading_h6_semibold_desktop",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
