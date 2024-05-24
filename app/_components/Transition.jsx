import { motion } from 'framer-motion';

// Variants
const transitionVariants = {
  initial: {
    x: '100%'
  },
  animate: {
    x: '0%',
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
  exit: {
    x: ['0%', '100%'],
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1 }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2 }}
      />
    </>
  );
};

export default Transition;
