import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/StarBackground"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JRim's Portfolio",
  description: "Modern & Minimalist 3D Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <StarsCanvas />
      </body>
    </html>
  );
}
