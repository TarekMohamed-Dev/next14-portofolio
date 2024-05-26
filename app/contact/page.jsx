'use client'
//components
import Circles from '../_components/Circles'

// icons
import {BsArrowRight} from 'react-icons/bs'

// framer
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../../variants'

// import Transition from "../_components/Transition";


const Contact = () => {
    return (
      <>
      {/* <Transition /> */}
      <div className='h-screen bg-[#e2e8f0] dark:bg-primary/30 pt-8'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
            {/* text */}
            <motion.h2 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-12 text-[#284979] dark:text-white'>Let's <span className='text-[#d487b1] dark:text-accent'>connect.</span></motion.h2>
            {/* form */}
            <form className='flex-1 flex flex-col gap-6 w-full text-black dark:text-white'>
              {/* group */}
              <div className='flex gap-x-6 w-full'>
                <input type='text' placeholder='name' className='input' />
                <input type='text' placeholder='email' className='input' />
              </div>
              <input type='text' placeholder='email' className='input' />
              <textarea placeholder='message' className="textarea"></textarea>
              <button className='btn rounded-full border border-black/50 dark:border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#d487b1] dark:hover:border-accent group text-[#d487b1] dark:text-accent'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
            </form>
        </div>
      </div>
    </div>
      </>
    )
  };
  
  export default Contact;
  