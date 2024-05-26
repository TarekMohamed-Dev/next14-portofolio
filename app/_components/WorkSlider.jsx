"use client"
// next image
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

// icons
import {BsArrowRight} from 'react-icons/bs'

// data
const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'Easy-Learn',
            path: '/Easy-Learn-MarketPlace.png',
            url: "https://easylearn-870b3.web.app/"
          },
          {
            title: 'Ai',
            path: '/ai.png',
            url: "https://tarekmohamed-dev.github.io/GPT3/"
          },
          {
            title: 'restaurant',
            path: '/restaurant.png',
            url: "https://gericht-luxury-restaurant.web.app/"
          },
          {
            title: 'Amazon',
            path: '/amazon.png',
            url: "https://clone-b2d87.web.app/"
          },
        ],
      },
      {
        images: [
          {
            title: 'Ecommerce',
            path: '/ecommerce.png',
            url: "https://ecommerce-38013.web.app/"
          },
          {
            title: 'title',
            path: '/thumb1.jpg',
            url: "#"
          },
          {
            title: 'title',
            path: '/thumb2.jpg',
            url: "#"
          },
          {
            title: 'title',
            path: '/thumb3.jpg',
            url: "#"
          },
        ],
      },
    ],
  };
  


// import required modules
const WorkSlider = () => {
  return (

<Swiper 
spaceBetween={10}
className="h-[280px] sm:h-[480px]" pagination={true} modules={[Pagination]} >
{workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => {
              return (
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                 <div className='flex items-center justify-center relative overflow-hidden group'>
                   {/* image */}
                   <div className='w-[200px] h-[100px] sm:w-[500px] sm:h-[200px] '>
                   <Image src={image.path} width={500} height={200} objectFit="cover"
                    alt={image.title} className='w-full h-full' />
                   </div>
                   {/* overlay gradient */}
                   <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                   {/* title */}
                   <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <a href={image.url} className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      {/* title part 1 */}
                      <div className='dela-100'>LIVE</div>
                      {/* title part 2 */}
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                      {/* icon */}
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                    </a>
                   </div>
                 </div>
                </div>
              )
            })}
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  );
};

export default WorkSlider;
