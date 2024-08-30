const fontGenerator = (
  fontFamily = "Pretendard",
  fontSize = "1.6rem",
  fontWeight = "normal",
  lineHeight = "normal",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-weight": fontWeight,
  "font-size": fontSize,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});

const theme = {
  colors: {
    b01: "#000000",
  },
  fonts: {
    heading1: fontGenerator(
      "Pretendard",
      "2.4rem",
      "700",
      "3.2rem",
      "-0.06rem"
    ),
    heading2: fontGenerator("Pretendard", "2.2rem", "700", "3rem", "-0.055rem"),
    heading3: fontGenerator("Pretendard", "2rem", "700", "2.8rem", "-0.04rem"),
    heading4: fontGenerator(
      "Pretendard",
      "1.8rem",
      "600",
      "2.6rem",
      "-0.018rem"
    ),
    body1_normal_semi: fontGenerator(
      "Pretendard",
      "1.6rem",
      "600",
      "2.4rem",
      "-0.016rem"
    ),
    body1_normal_medi: fontGenerator(
      "Pretendard",
      "1.6rem",
      "500",
      "2.4rem",
      "-0.016rem"
    ),
    body1_long: fontGenerator(
      "Pretendard",
      "1.6rem",
      "400",
      "2.6rem",
      "-0.016rem"
    ),
    body2_normal_semi: fontGenerator(
      "Pretendard",
      "1.4rem",
      "600",
      "2rem",
      "-0.007rem"
    ),
    body2_normal_medi: fontGenerator(
      "Pretendard",
      "1.4rem",
      "500",
      "2rem",
      "-0.007rem"
    ),
    body2_long: fontGenerator(
      "Pretendard",
      "1.4rem",
      "400",
      "2.2rem",
      "-0.007rem"
    ),
    caption1_semi: fontGenerator(
      "Pretendard",
      "1.2rem",
      "600",
      "1.8rem",
      "-0.03rem"
    ),
    caption1_medi: fontGenerator(
      "Pretendard",
      "1.2rem",
      "500",
      "1.8rem",
      "-0.03rem"
    ),
    caption2_semi: fontGenerator(
      "Pretendard",
      "1.1rem",
      "600",
      "1.6rem",
      undefined
    ),
    caption2_medi: fontGenerator(
      "Pretendard",
      "1.1rem",
      "500",
      "1.6rem",
      undefined
    ),
  },
};

export default theme;
