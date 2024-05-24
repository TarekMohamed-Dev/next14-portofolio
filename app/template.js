"use client";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Transition from "./_components/Transition";

export default function Template({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
