'use client'
import { useState } from 'react'
import Image from 'next/image'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithub 
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiRedux  
} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <SiTailwindcss key="tailwind" />,
          <SiRedux key="redux" />,
          <FaGitAlt key="git" />,
          <FaGithub key="github" />
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Frontend Web Developer - Freelancer',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Frontend Web Development - udemy',
        stage: '2011',
      },
      {
        title: 'Egyption Army - Very Good',
        stage: '2023',
      },
      {
        title: 'Bachelors degree in foreign trade - Helwan University',
        stage: '2021',
      },
    ],
  },
];

// components
import Circles from '../_components/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0)

  return (
    <>
      <div className='relative h-screen py-32 text-center xl:text-left bg-[#e2e8f0] dark:bg-primary/30'>
        
        {/* Circles component */}
        <Circles />
        
        <div className='gradient absolute w-full h-[50%] bg-accent/25 blur-[100px] left-[100px] top-60 ' />
        
        {/* Avatar image */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute top-[300px] right-[150px] animate-pulse duration-75'>
          <Image src='/bulb.png' width={200} height={200} alt='' />
        </motion.div>
        
        {/* Main content */}
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-[60px]'>
          
          {/* text */}
          <div className='flex-1 flex flex-col justify-center z-20 text-black dark:text-white'>
            <motion.h2 
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'>Captivating <span className='text-accent'>stories</span> birth magnificent designs.
            </motion.h2>
            <motion.p 
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-black/90 dark:text-white/60'>
              3 years ago, I mastered front-end development, crafting responsive sites with Tailwind CSS and dynamic animations via FramerMotion. Expertly integrating Redux and Strapi CMS, I ensure seamless content flow and precision in every API call, delivering flawless user experiences across all devices.
            </motion.p>
            
            {/* counters */}
            <motion.div 
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className='flex flex-1 xl:gap-x-6'>
                
                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-black/20 dark:after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={3} duration={15} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
                </div>
                
                {/* clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-black/20 dark:after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={15} duration={15} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
                </div>
                
                {/* projects */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-black/20 dark:after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={45} duration={15} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
                </div>
                
                {/* awards */}
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={4} duration={15} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning awards</div>
                </div>
                
              </div>
            </motion.div>
          </div>
          
          {/* info menu */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col w-full xl:max-w-[48%] h-[480px]  z-20 text-black dark:text-white  overflow-y-auto'>
            
            {/* Menu items */}
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className={`cursor-pointer capitalize xl:text-lg relative select-none
  after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0
  ${index === itemIndex ? 'text-accent after:w-[100%] after:bg-accent dark:after:bg-accent after:transition-all after:duration-300' : 'after:bg-black dark:after:bg-white'}`}

                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            
            {/* Detailed info based on selected menu item */}
           <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-black dark:text-white/60 '>
                  <div className='font-light mb-2 md:mb-0 '>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => (
                      <div key={itemIndex} className='text-2xl dark:text-white'>{icon}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            
          </motion.div>
        </div>
      </div>
    </>
  )
};

export default About;
