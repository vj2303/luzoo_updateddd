"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link"

const SalonCrousal = () => {
    return (
        <div className=' px-[10px] my-[30px] sm:my-[60px] 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto'>
            <h1 className='font-bold text-[30px] text-[#051036]'>500+ Salons and Spas</h1>
            {/* <div> */}
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation={{ nextEl: ".next", prevEl: ".prev" }}
                loop={true}

                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    // When window width is <= 640px (for mobile devices)
                    640: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/bblunt'><Image src="/img/salons/2.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/jcb'><Image src="/img/salons/7.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/juice'><Image src="/img/salons/3.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/bodycraft'> <Image src="/img/salons/10.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
             
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/tattva' ><Image src="/img/salons/6.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/lookwell'> <Image src="/img/salons/8.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/toni-and-guy'> <Image src="/img/salons/5.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>   
                        <Link href='/salon/femina-flaunt'><Image src="/img/salons/4.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/tip-and-toe' > <Image src="/img/salons/1.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/lemon'> <Image src="/img/salons/9.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
  
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/apple'> <Image src="/img/salons/11.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/the-first'>  <Image src="/img/salons/12.webp" width={324} height={182} alt='salon' className='aspect-video' />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/harsha-and-rakesh'> <Image src="/img/salons/13.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/jco'><Image src="/img/salons/14.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col gap-[20px]'>
                        <Link href='/salon/fashiontv'> <Image src="/img/salons/15.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                        <Link href='/salon/kprive'>  <Image src="/img/salons/16.webp" width={324} height={182} alt='salon' className='aspect-video' /></Link>
                    </div>
                </SwiperSlide>


            </Swiper>

            {/* </div> */}
            <div className='flex justify-between  items-center sm:px-[20%] mt-[30px] sm:mt-0'>
                <button className='prev'><ChevronLeft /></button>
                <div className=' flex flex-row gap-[20px] sm:gap-[100px]'>

                    <p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Mumbai</p>
                    <p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Pune</p>
                    <p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Bangalore</p>
                </div>
                <button className='next '><ChevronRight /></button>
            </div>

        </div>
    )
}

export default SalonCrousal