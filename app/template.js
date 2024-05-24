'use client'
// Template.js
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Transition from "./_components/Transition";

export default function Template({ children }) {
  const pathname = usePathname();

  return (
    <div id="pathname">
      <AnimatePresence mode="wait">
        <Transition key={pathname.id} />
        {children}
      </AnimatePresence>
    </div>
  );
}
