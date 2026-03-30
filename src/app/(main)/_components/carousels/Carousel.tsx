"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoDotFill, GoDot } from "react-icons/go";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImageDefault from '../images/ImageDefault';
import { CardInterface } from '../../_data/entity/CardEntity';
import { PartnerInterface } from '@/app/admin/partner/_data/entity/PartnerEntity';
import { baseURL } from '@/_api/baseURL';
import CardAbout from '../cards/CardAbout';
import { NoImage } from '@/_data/sample/NoImage';
import Link from 'next/link';


interface SwiperRefType {
  swiper: SwiperType;
}


interface PropInterface{
    data?: any[]
}


export default function Carousel({ data }: PropInterface) {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const swiperRef = useRef<SwiperRefType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const totalSlides: number = 6; // Dynamic slide count based on data
    const handleSlideChange = (swiper: SwiperType): void => {
      setActiveIndex(swiper.activeIndex);
    };
  // Handle direct pagination click with React components
  const handlePaginationClick = (index: number): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  useEffect(() => {
      // This code will only run on the client-side
      setWindowWidth(window.innerWidth);
      const handleResize = (): void => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize); // Cleanup
      };
  }, []); 



  return (
    <div className=" w-full mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        onSlideChange={handleSlideChange}
        navigation={false}
        pagination={false} // Disable default pagination
        className="mb-2"
      >
        {/* slides */}
        { data && data.map((i, key) => (
          <SwiperSlide key={key} className='p-2'>
            <Card
                href={i.href}
                name={i.name} 
                image={i.image ?? NoImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls container */}
      <div className="hidden carousel-controls flex-col items-center gap-4">
        {/* Custom React-based pagination dots */}
        <div className="custom-pagination flex items-center justify-center gap-3 mb-4">
          {Array.from({ 
            length: Math.ceil(totalSlides / (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1)) 
          }).map((_, index: number) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index * (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1))}
              className="pagination-dot focus:outline-none"
              aria-label={`Go to slide group ${index + 1}`}
            >
              {index === Math.floor(activeIndex / (windowWidth >= 1024 ? 3 : windowWidth >= 640 ? 2 : 1)) ? (
                <GoDotFill className="w-5 h-5 text-blue-500" />
              ) : (
                <GoDot className="w-5 h-5 text-gray-300" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="navigation-buttons flex items-center justify-end gap-4">
        <button 
          onClick={() => swiperRef.current?.swiper?.slidePrev()} 
          className="group cursor-pointer carousel-button-prev p-2 rounded-full drop-shadow-lg bg-white hover:bg-gray-50 focus:outline-none"
        >
          <FaCircleChevronLeft className="w-6 h-6 text-blue-900 transition-all ease-linear duration-100 group-hover:scale-105" />
        </button>
        <button 
          onClick={() => swiperRef.current?.swiper?.slideNext()} 
          className="group cursor-pointer carousel-button-next p-2 rounded-full drop-shadow-lg bg-white hover:bg-gray-50 focus:outline-none"
        >
          <FaCircleChevronRight className="w-6 h-6 text-blue-900 transition-all ease-linear duration-100 group-hover:scale-105" />
        </button>
      </div>
    </div>
  );
}


interface pInterface{
    image?: string
    name: string
    href: string
}

function Card({
    image, 
    name, 
    href
}: pInterface){

    return(
        <div className='w-full rounded-xl overflow-hidden drop-shadow bg-gray-50'>
            <figure className='aspect-5/4 w-full bg-gray-300 border-b border-gray-300'>
                <img 
                    alt='Image' 
                    className="w-full h-full object-contain" 
                    src={image} 
                />
            </figure>
            <div className='px-3 pt-2 pb-3 h-18'>
                 <span className='text-gray-600 font-medium pb-[0.5px] leading-0.5'>
                    {name}
                </span> 
               {/*  <Link href={href}> 
                <span className='text-gray-600 hover:text-blue-800 hover:border-blue-800 font-medium ease-in-out transition-all duration-200 hover:border-b pb-[0.5px] leading-0.5'>
                    {name}
                </span> 
                </Link> */}
            </div>
        </div>
    )
}