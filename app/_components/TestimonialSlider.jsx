"use client"

// testimonial data
const testimonialData = [
    {
      image: '/1.webp',
      name: 'Khaled Zohery',
      position: 'Customer',
      message:
        'الله اكبر انا مشوفتش بورتفوليو بالجمال ده قبل كده بم الله ما شاء الله',
    },
    {
      image: '/2.webp',
      name: 'Omar Hassan',
      position: 'Customer',
      message:
        'tarek mohamed has helped my team and I stay on the same page. Previously, we were all over the board. working with tarek mohamed has definitely saved us time and money.',
    },
    {
      image: '/3.webp',
      name: 'Hamza',
      position: 'Customer',
      message:
        "it's perfect ماشاء الله عليك شغل ممتاز جدا بارك الله فيك"
    },
  ];
  
  // icons
  import {FaQuoteLeft} from 'react-icons/fa'

  // next image
  import Image from 'next/image'
    
  // Import Swiper React components
  import { Swiper, SwiperSlide } from 'swiper/react';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';
  
  // icons
  import {BsArrowRight} from 'react-icons/bs'
  
  // import required modules
  const TestimonialSlider = () => {
    return (
  
  <Swiper 
      navigation={true}
  className="h-[400px]" pagination={true} modules={[Pagination, Navigation]} >
  {testimonialData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt=''  className='rounded-full'/>
                  </div>
                  {/* name */}
                  <div className='text-lg text-[#284979] dark:text-white'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest text-gray-700 dark:text-white'>{person.position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl dark:text-white/20 mx-auto md:mx-0 text-[#284979]/20' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left text-gray-700 dark:text-white'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
    );
  };
  
  export default TestimonialSlider;
  
  