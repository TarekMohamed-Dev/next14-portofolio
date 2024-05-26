// links
import Link from 'next/link'

// icons
import { 
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} 
     className='bg-[#d487b1] text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300 hover:text-[#284979] dark:hover:text-[#d487b1]'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} 
      className='bg-[#d487b1] text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300 hover:text-[#284979] dark:hover:text-[#d487b1]'>
        <RiFacebookLine />
      </Link>
      <Link href={''} 
      className='bg-[#d487b1] text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300 hover:text-[#284979] dark:hover:text-[#d487b1]'>
        <RiInstagramLine />
      </Link>
      <Link href={''} 
      className='bg-[#d487b1] text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300 hover:text-[#284979] dark:hover:text-[#d487b1]'>
        <RiDribbbleLine />
      </Link>
      <Link href={''} 
      className='bg-[#d487b1] text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300 hover:text-[#284979] dark:hover:text-[#d487b1]'>
        <RiBehanceLine />
      </Link>
      <Link
      href={''}
      className='bg-[#d487b1] text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300 hover:text-[#284979] dark:hover:text-[#d487b1]'
    >
      <RiPinterestLine />
    </Link>
    </div>
  );
};

export default Socials;
