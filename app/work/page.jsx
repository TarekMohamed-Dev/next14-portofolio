'use client'
// components
import WorkSlider from '../_components/WorkSlider';
import Bulb from '../_components/Bulb';
import Circles from '../_components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// import Transition from "../_components/Transition";

const Work = () => {
    return (
      <>
        {/* <Transition /> */}
        <div className='gradient absolute w-full sm:w-[20%] h-[20%] bg-accent/25 blur-[100px] left-[100px] top-32 sm:top-auto sm:bottom-32' />


        <div className='bg-[#e2e8f0] dark:bg-primary/30 pt-20 sm:pt-32 flex items-center h-screen'>
          <Circles />
          <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-x-8'>
              {/* text */}
              <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                <motion.h2
                  variants={fadeIn('up', 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className='h2 xl:mt-12 text-black dark:text-white'
                >
                  My Work 
                  <span className='text-accent'>.</span>
                </motion.h2>
                <motion.p
                  variants={fadeIn('up', 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-black/80'
                >
                  Here are some of the projects I've worked on, showcasing my skills in creating modern and responsive web applications, optimizing user experience, and implementing the latest technologies to deliver high-quality results.
                </motion.p>
              </div>
              {/* slider */}
              <motion.div 
                variants={fadeIn('down', 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='w-full xl:max-w-[65%]'
              >
                <WorkSlider />
              </motion.div>
              <div></div>
            </div>
          </div>
          <Bulb />
        </div>
      </>
    )
};

export default Work;
