"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { themeSystem } from "@/config/theme";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={themeSystem ?? defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
