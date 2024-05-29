'use client'
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';
// icons
import {BsArrowRight} from 'react-icons/bs'
const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSvgVisible, setIsSvgVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('tarekmohameddev0@gmail.c', 'template_vva9kyg', formRef.current, 'k0PD8_fGcFw7os6Ud')
      .then((result) => {
        setSuccess(true);
      }, (error) => {
        setError(true);
      });
  };

  const handleAnimationComplete = () => {
    setIsSvgVisible(false);
    setIsFormVisible(true);
  };

  return (
    <motion.div ref={ref} className="bg-[#e2e8f0] dark:bg-primary/30 text-blue dark:text-white mx-auto flex items-center p-5 flex-col md:flex-row px-20 pt-[140px] sm:pt-[90px] h-screen" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="sm:flex-1 flex flex-col  gap-0 sm:gap-6 text-center md:text-left" variants={variants}>
        <motion.h1 className="flex justify-center gap-x-2 sm:gap-x-0 sm:flex-col text-2xl md:text-[60px] font-bold" variants={variants}>
          <div className='mb-5'>Let's</div>
          <div className='mb-5'>work</div>
          <div>together</div>
        </motion.h1>
        <motion.div className="mb-4" variants={variants}>
          <h2 className="text-xl font-semibold">Mail</h2>
          <span className="font-light">tarekmohameddev0@gmail.com</span>
        </motion.div>
        <motion.div className="mb-4">
          <h2 className="text-xl font-semibold">Address</h2>
          <span className="font-light">14 St Mohamed Madian Ain Shams, Cairo</span>
        </motion.div>
        <motion.div className="mb-4">
          <h2 className="text-xl font-semibold">Phone</h2>
          <span className="font-light">01094747851</span>
        </motion.div>
      </motion.div>
      <div className="flex-1 relative">
        {isSvgVisible && (
          <motion.div 
            className="flex items-center justify-center z-50" 
            initial={{ opacity: 1 }} 
            animate={{ opacity: 0 }} 
            transition={{ delay: 3, duration: 1 }} 
            onAnimationComplete={handleAnimationComplete}
          >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] mx-auto stroke-current text-blue dark:text-accent">
              <g data-name="1">
                <path initial={{ pathLength: 0 }} animate={isInView && { pathLength: 1 }} d="M348.73 450.06a198.63 198.63 0 0 1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152c-13.32-55.1-3.82-102.24 26.72-132.78l8.72-8.72a42.2 42.2 0 0 1 59.62 0l50.11 50.1a42.18 42.18 0 0 1 0 59.62l-29.6 29.59c14.19 24.9 33.49 49.82 56.3 72.63s47.75 42.12 72.64 56.31l29.59-29.6a42.15 42.15 0 0 1 59.62 0l50.1 50.1a42.16 42.16 0 0 1 0 59.61l-8.73 8.72c-21.53 21.57-51.33 32.63-86.33 32.63ZM125.22 78a12 12 0 0 0-8.59 3.56l-8.73 8.72c-22.87 22.87-29.55 60-18.81 104.49 11.37 47.13 40.64 96.1 82.41 137.86s90.73 71 137.87 82.41c44.5 10.74 81.61 4.06 104.48-18.81l8.72-8.72a12.16 12.16 0 0 0 0-17.19l-50.09-50.1a12.16 12.16 0 0 0-17.19 0l-37.51 37.51a15 15 0 0 1-17.5 2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15 15 0 0 1 2.71-17.5l37.52-37.51a12.16 12.16 0 0 0 0-17.19l-50.1-50.11a12.07 12.07 0 0 0-8.6-3.56Z" fill="none"></path>
                <path d="M364.75 269.73a15 15 0 0 1-15-15 99.37 99.37 0 0 0-99.25-99.26 15 15 0 0 1 0-30c71.27 0 129.25 58 129.25 129.26a15 15 0 0 1-15 15Z" fill="none"></path>
                <path d="M428.15 269.73a15 15 0 0 1-15-15c0-89.69-73-162.66-162.65-162.66a15 15 0 0 1 0-30c106.23 0 192.65 86.43 192.65 192.66a15 15 0 0 1-15 15Z" fill="none"></path>
              </g>
            </svg>
          </motion.div>
        )}
        {isFormVisible && (
          <motion.form 
          onSubmit={sendEmail} 
          ref={formRef} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0, duration: 1 }} 
          className="flex flex-col w-[300px] sm:w-[450px] mx-auto"
        >
          <div className='flex flex-col sm:flex-row gap-3'>
            <input 
              className="w-full sm:w-[220px] pl-3 py-2 sm:p-4 bg-transparent  rounded-md focus:outline-none" 
              type="text" 
              required 
              placeholder="Name" 
              name="name" 
            />
            <input 
              className="w-full sm:w-[220px] pl-3 py-2 sm:p-4 bg-transparent rounded-md focus:outline-none" 
              type="email" 
              required 
              placeholder="Email" 
              name="email" 
            />
          </div>
          <textarea 
            className="w-full pl-3 py-2 sm:p-4 bg-transparent rounded-md focus:outline-none mt-4 sm:mt-8 mb-3  " 
            placeholder="Message" 
            name="message" 
          />
          <button  
            className="w-full sm:w-auto p-2 sm:p-4 bg-blue hover:bg-blue/75 dark:bg-accent/75 dark:hover:bg-accent/50 text-white rounded-md cursor-pointer font-semibold"
          >
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
          </button>
          {error && <span className="text-red-500">Error</span>}
          {success && <span className="text-green-500">Success</span>}
        </motion.form>
        )}
      </div>
    </motion.div>
  );
}

export default Contact;
