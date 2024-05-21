/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'

// components
import ParticlesContainer from './_components/ParticlesContainer'
import ProjectsBtn from './_components/ProjectsBtn'
import Avatar from './_components/Avatar'

// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'

export default function Home() {
  return (
    <div className='dark:bg-primary/60 h-full relative'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-20'>
        <div className='text-center flex flex-col justify-center pt-32 sm:pt-20 md:pt-40 xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h1 text-black dark:text-white'
          >
            Transforming Ideas <br /> Into <span className='text-[#A91D3A] dark:text-accent'>Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-black dark:text-white/60'
          >
            A skilled front-end developer with extensive experience in JavaScript, and I specialize in frameworks like React.js and Next.js. My expertise lies in delivering high-quality, optimized code that caters to clients' needs and exceeds their expectations.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative mb-10'>
            <ProjectsBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className='bg-wh dark:bg-explosion xl:bg-cover bg-center xl:bg-right xl:bg-no-repeat w-full h-full absolute dark:mix-blend-color-dodge translate-z-0'>
        </div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img*/}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[437px] xl:max-h-[678px] absolute -bottom-20 sm:-bottom-24 md:-bottom-28 lg:-bottom-32 xl:bottom-0 lg:right-[8%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}
