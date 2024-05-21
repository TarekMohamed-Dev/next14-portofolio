// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../_components/Socials';

import { ModeToggle } from './toggleMenu';

// next-themes
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={theme === 'dark' ? '/logolight.png' : '/logodark.png'}
              width={190}
              height={70}
              alt='Logo'
              priority={true}
            />
          </Link>
          <div className='flex items-center gap-x-2'>
            {/* socials */}
            <Socials />
            {/* mode toggle */}
            <div className='absolute right-[20px] top-20 md:relative md:right-0 md:top-0 md:px-3 lg:static lg:px-0 lg:right-0 lg:top-0'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
