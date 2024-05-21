'use client'

import Image from 'next/image';
import Link from 'next/link';
import Socials from '../_components/Socials';
import { ModeToggle } from './toggleMenu';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-3 pt-3'>
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={theme === 'dark' || resolvedTheme === 'dark' ? '/logolight.png' : '/logodark.png'}
              width={150}
              height={60}
              alt='Logo'
              priority={true}
            />
          </Link>
          <div className='flex items-center gap-x-2'>
            {/* socials */}
            <Socials />
            {/* mode toggle */}
            <div className='absolute right-[13px] top-6 sm:px-5 sm:static sm:right-0 sm:top-0'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
