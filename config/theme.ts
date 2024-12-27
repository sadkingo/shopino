import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import colors from "./colors";

const themeConfig = defineConfig({
  globalCss: {
    html: {
      colorPalette: colors.main,
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        fg: {
          DEFAULT: {
            value: {
              base: colors.main,
              _dark: colors.sky,
              _light: colors.sky,
            },
          },
        },
        bg: {
          DEFAULT: {
            value: {
              base: colors.main,
              _dark: colors.sky,
              _light: colors.sky,
            },
          },
        },
      },
    },
  },
});

const themeSystem = createSystem(defaultConfig, themeConfig);
export { themeConfig, themeSystem, colors };
