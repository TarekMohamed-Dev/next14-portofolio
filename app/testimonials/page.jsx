"use client"
// components
import TestimonialSlider from '../_components/TestimonialSlider'

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


const Testimonials = () => {
    return (
      <>
      <div className='h-screen bg-[#e2e8f0] dark:bg-primary/30 sm:py-32 text-center'>
        <div className='container mx-auto h-full flex flex-col justify-center'>
          {/* title */}
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0 text-black dark:text-white'>
            What clients 
          <span className='text-blue dark:text-accent'>say.</span>
          </motion.h2>
          {/* slider */}
          <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
      </>
    )
  };
  
  export default Testimonials;
  