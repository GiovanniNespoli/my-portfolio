"use client";
import { Montserrat, Schibsted_Grotesk } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import GlobalCSS from "./styles/GlobalStyles";

const monstserrat = Montserrat({ subsets: ["latin"] });
const schibstedGrotesk = Schibsted_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monstserrat.className} ${schibstedGrotesk.className}`}
      >
        <GlobalCSS />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
