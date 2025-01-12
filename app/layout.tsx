import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.css";

import Background from "@images/background.jpg"
import { Provider } from "@/components/ui/provider";
import Header from "@/components/header";
import { Box } from "@chakra-ui/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: process.env.WEBSITE_NAME,
    description: "Created by " + process.env.COMPANY_NAME,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} flex flex-col antialiased`} style={{background: `url(${Background.src})`}}>
        <Provider>
            <Header/>
            <Box
                display="flex"
                as="main"
                margin="auto"
                w="full"
                maxW="breakpoint-2xl"
                justifyContent="center"
                bg={{_light: "whiteAlpha.950", _dark: "blackAlpha.950"}}
                flex={1}>
                {children}
            </Box>
        </Provider>
        </body>
        </html>
    );
}
