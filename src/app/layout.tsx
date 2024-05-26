import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeRegistry from "@/lib/theme_registry";
import { Box } from "@mui/material";
// import AppRouterCacheProvider
// import { ThemeProvider } from "@emotion/react";
// import { themeOptions } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DesiBlog",
  description: "A blog created by Desiré",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ThemeRegistry>
        <body className={inter.className}>
          {/* <Box minHeight='100vh' width='100%' bgcolor="secondary" border="3px solid red"> */}

          {/* <ThemeProvider theme={themeOptions.light} > */}
          <Header />
          <main >
            {children}
          </main>
          <Footer />
          {/* </Box> */}
          {/* </ThemeProvider> */}
        </body>
      </ThemeRegistry>
    </html>
  );
}
