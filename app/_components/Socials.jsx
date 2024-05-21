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
      className='bg-accent/50 text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300  hover:text-accent dark:hover:text-accent'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} 
      className='bg-accent/50 text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300  hover:text-accent dark:hover:text-accent'>
        <RiFacebookLine />
      </Link>
      <Link href={''} 
      className='bg-accent/50 text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300  hover:text-accent dark:hover:text-accent'>
        <RiInstagramLine />
      </Link>
      <Link href={''} 
      className='bg-accent/50 text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300  hover:text-accent dark:hover:text-accent'>
        <RiDribbbleLine />
      </Link>
      <Link href={''} 
      className='bg-accent/50 text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300  hover:text-accent dark:hover:text-accent'>
        <RiBehanceLine />
      </Link>
      <Link
      href={''}
      className='bg-accent/50 text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300  hover:text-accent dark:hover:text-accent'
    >
      <RiPinterestLine />
    </Link>
    </div>
  );
};

export default Socials;
