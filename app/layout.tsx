import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import { Provider } from "@components/chakra-ui/provider";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: process.env.WEBSITE_NAME,
  description: "Created by " + process.env.COMPANY_NAME,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${inter.className} flex flex-col antialiased`}>
    <Provider>
      <SessionProvider>
        <Header/>
        <Box
          as="main"
          display="flex"
          margin="auto"
          w="full"
          maxW="breakpoint-2xl"
          justifyContent="center"
          bg={{_light: "whiteAlpha.950", _dark: "blackAlpha.950"}}
          flex={1}>
          {children}
        </Box>
        <Footer/>
      </SessionProvider>
    </Provider>
    </body>
    </html>
  );
}
