import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  baseTheme,
} from "@chakra-ui/react";

export const colors = {
  ...baseTheme.colors,
  brand: {
    ...baseTheme.colors.pink,
  },
};

const theme = extendTheme(
  {
    colors,
    styles: {
      global: {},
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  })
);

export default theme;
