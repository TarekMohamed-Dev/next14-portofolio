'use client'
// components
import ServiceSlider from '../_components/ServiceSlider'
import Bulb from '../_components/Bulb'
import Circles from '../_components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
// import Transition from "../_components/Transition";

const Services = () => {
    return (
      <>
        {/* <Transition /> */}
        <div className='bg-[#e2e8f0] dark:bg-primary/30 pt-20 flex items-center h-screen'>
          <Circles />
          <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-x-8'>
              {/* text */}
              <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-10 xl:mb-0'>
                <motion.h2
                 variants={fadeIn('up', 0.2)}
                 initial="hidden"
                 animate="show"
                 exit="hidden"
                 className='h2 xl:mt-8 text-black dark:text-white'
                >
                  My services 
                  <span className='text-blue dark:text-accent'>.</span>
                </motion.h2>
                <motion.p
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                 className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-black/80'>
                I develop responsive web applications with modern designs and efficient grid layouts. I optimize existing websites for user-friendliness and visual appeal, and create cutting-edge online stores using the latest technologies.
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
                <ServiceSlider />
              </motion.div>
            </div>
          </div>
          <Bulb />
        </div>
      </>
    );
  };

export default Services;
