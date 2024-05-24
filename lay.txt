"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./_components/Layout";
import { usePathname } from 'next/navigation';
import {  motion } from 'framer-motion';
import { ThemeProvider } from "./_components/theme-provider";
import Transition from "./_components/Transition";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
              <motion.div key={pathname}>
                {children}
              </motion.div>
          </Layout>
          <Transition />
        </ThemeProvider>
      </body>
    </html>
  );
}