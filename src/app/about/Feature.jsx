"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Image from 'next/image';

const Feature = () => {
  const features = [
    {
      img: '/feature1.png',
      heading: '1.Book, Cancel & Reschedule',
      para: 'You can easily book, cancel, reschedule your appointment',
    },
    {
      img: '/feature1.png',
      heading: '2.Exclusive offers',
      para: 'Avail exclusive offers at all salon ',
    },
    {
      img: '/feature1.png',
      heading: '3.Enjoy Giftcards',
      para: 'Buy / claim gift cards',
    },
    {
      img: '/feature1.png',
      heading: '4.Book by concern',
      para: 'Book appointment according to your concern',
    },
    {
      img: '/feature1.png',
      heading: '5.Enjoy in  different cities',
      para: 'Get services done at different cities',
    },
  ];

  return (
    <div className='px-[10px] sm:px-[100px]'>
      <h1 className='text-[30px] font-bold leading-[39px] my-[30px]'>Our Features</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{ nextEl: ".popular_next", prevEl: ".popular_prev" }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: "pagination-item",
          bulletActiveClass: "pagination-active-item"
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
        }}
      >

{features.map((feature, index) => (
  <SwiperSlide key={index}>
    <div className='flex flex-col items-center mb-4'>
      <Image src={feature.img} alt={feature.heading} width={80} height={163} className='sm:h-[30vh] sm:w-[60%]' />
      <h1 className='text-[14px] sm:text-[18px] text-center py-[10px] font-medium'>{feature.heading}</h1>
      <p className='text-[12px] sm:text-[14px] text-center'>{feature.para}</p>
    </div>
  </SwiperSlide>
))}
</Swiper>


  <button className='popular_prev p-2 sm:block shadow-md rounded-full absolute left-0 sm:left-[40%]  transform -translate-y-1/2 text-white bg-blue-500'>
    <ChevronLeft />
  </button>
  <button className='popular_next p-2 sm:block shadow-md rounded-full absolute right-0 sm:right-[40%]  transform -translate-y-1/2  text-white bg-blue-500'>
    <ChevronRight />
  </button>

    </div>
  );
};

export default Feature;
