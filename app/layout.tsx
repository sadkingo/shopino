import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.WEBSITE_NAME,
  description: "Created by " + process.env.COMPANY_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
