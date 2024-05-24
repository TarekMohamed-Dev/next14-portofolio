import { motion } from 'framer-motion';

// Variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '100%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['100%', '0%'],
  },
};

const Transition = ({ isExit }) => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
        key="layer1"
        isExit={isExit}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
        key="layer2"
        isExit={isExit}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]'
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
        key="layer3"
        isExit={isExit}
      />
    </>
  );
};

export default Transition;
