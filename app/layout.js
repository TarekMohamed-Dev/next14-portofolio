"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./_components/Layout";
// import Transition from "./_components/Transition";
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from "./_components/theme-provider";

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
            <AnimatePresence mode='wait'>
              <motion.div key={pathname} className='h-full'>
                {children}
              </motion.div>
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
