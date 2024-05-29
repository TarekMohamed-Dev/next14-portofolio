// links
import Link from 'next/link'

// icons
import { RiFacebookLine } from 'react-icons/ri'

import { FaLinkedinIn , FaGithub , FaWhatsapp , FaTelegramPlane   } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/tarek-mohamed-881a57297/'} 
     className='bg-[#0a66c2] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-90' >
       <FaLinkedinIn />
      </Link>
      <Link href={'https://github.com/TarekMohamed-Dev'} 
      className='bg-[#333] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-90'>
        <FaGithub />
      </Link>
      <Link href={'https://www.facebook.com/tarek.algazer/'} 
      className='bg-[#1877f2]  text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-90'>
        <RiFacebookLine />
      </Link>
     
      <Link href={'https://wa.me/+201094747851?text=Send20%a20%quote'} 
      className='bg-[#075e54] blue/50  text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-90'>
        <FaWhatsapp />
      </Link>
      <Link href={'https://t.me/+201094747851'} 
      className='bg-[#0088cc]  text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-90'>
       <FaTelegramPlane />
      </Link>
    </div>
  );
};

export default Socials;
