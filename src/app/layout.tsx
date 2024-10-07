import { Providers } from "@/components";
import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";

export const metadata: Metadata = {
  title: "Warrior Network",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
