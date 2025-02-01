import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import colors from "./colors";

const themedColors = {
  light: { _light: colors.light, _dark: colors.mediumLight },
  medium: { _light: colors.mediumLight, _dark: colors.medium },
  dark: { _light: colors.mediumDark, _dark: colors.dark },
}

const themeConfig = defineConfig({
  globalCss: {
    html: {
      colorPalette: colors.mediumDark,
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: {
              base: colors.mediumDark,
              _dark: colors.medium,
              _light: colors.mediumLight,
            },
          },
        },
      },
    },
  },
});

const themeSystem = createSystem(defaultConfig, themeConfig);
export { themeConfig, themeSystem, colors, themedColors };
