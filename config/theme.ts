import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import colors from "./colors";

const themeConfig = defineConfig({
  globalCss: {
    html: {
      colorPalette: colors.mediumDark,
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        fg: {
          DEFAULT: {
            value: {
              base: colors.mediumDark,
              _dark: colors.mediumLight,
              _light: colors.mediumLight,
            },
          },
        },
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
export { themeConfig, themeSystem, colors };
