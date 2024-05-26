"use client"
// components
import TestimonialSlider from '../_components/TestimonialSlider'

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


const Testimonials = () => {
    return (
      <>
      {/* <Transition /> */}
      <div className='block dark:hidden gradient absolute w-full h-[50%] bg-[#d487b1]/50 blur-[100px] left-[100px] top-60 ' />
      <div className='h-screen bg-[#e2e8f0] dark:bg-primary/30 py-32 text-center'>
        <div className='container mx-auto h-full flex flex-col justify-center'>
          {/* title */}
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0 text-[#284979] dark:text-white'>
            What clients 
          <span className='text-[#d487b1] dark:text-accent'>say.</span>
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
  