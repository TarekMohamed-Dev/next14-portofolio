"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Creating a unique identity for your brand to stand out in the market.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Crafting visually appealing and user-friendly designs for your products.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building robust and scalable web applications to meet your business needs.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Writing compelling and engaging content to attract and retain your audience.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimizing your website to rank higher in search engine results and attract more traffic.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        }
      }}
      className="h-[240px] sm:h-[340px]"
      pagination={true}
      modules={[Pagination]}
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#65344f] dark:bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer dark:hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 z-30">
            {/* icon */}
            <div className='text-4xl text-[#d487b1] dark:text-accent mb-4'>{item.icon}</div>
            {/* title desc */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-[#d487b1] dark:group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
