import React, { useRef, useEffect, useState } from 'react';import { Box } from '@mui/material';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCard from '../SwiperCard/SwiperCard';

const swiperItems = [
  {
    id: 1,
    image: '/swiper_video/2.WebM',
    title: 'First Slide',
  },
  {
    id: 2,
    image: '/swiper_video/5.WebM',
    title: 'Second Slide',
  },
  {
    id: 3,
    image: '/swiper_video/6.WebM',
    title: 'Third Slide',
  },
  {
    id: 4,
    image: '/swiper_video/7.WebM',
    title: 'Fourth Slide',
  },
  {
    id: 5,
    image: '/swiper_video/8.WebM',
    title: 'Fifth Slide',
  },
  {
    id: 6,
    image: '/swiper_video/11.WebM',
    title: 'Sixth Slide',
  },
  {
    id: 7,
    image: '/swiper_video/16.WebM',
    title: 'Seventh Slide',
  },
  {
    id: 8,
    image: '/swiper_video/20.WebM',
    title: 'Eighth Slide',
  },
  {
    id: 9,
    image: '/swiper_video/21.WebM',
    title: 'Ninth Slide',
  },
  {
    id: 10,
    image: '/swiper_video/22.WebM',
    title: 'Tenth Slide',
  },
  {
    id: 11,
    image: '/swiper_video/23.WebM',
    title: 'Eleventh Slide',
  },
  {
    id: 12,
    image: '/swiper_video/24.WebM',
    title: 'Twelfth Slide',
  },
  {
    id: 13,
    image: '/swiper_video/27.WebM',
    title: 'Thirteenth Slide',
  },
  {
    id: 14,
    image: '/swiper_video/30.WebM',
    title: 'Fourteenth Slide',
  },
  {
    id: 15,
    image: '/swiper_video/34.WebM',
    title: 'Fifteenth Slide',
  },
  {
    id: 16,
    image: '/swiper_video/35.WebM',
    title: 'Sixteenth Slide',
  },
  {
    id: 17,
    image: '/swiper_video/39.WebM',
    title: 'Seventeenth Slide',
  },
  {
    id: 18,
    image: '/swiper_video/40.WebM',
    title: 'Eighteenth Slide',
  },
  {
    id: 19,
    image: '/swiper_video/41.WebM',
    title: 'Nineteenth Slide',
  },
  {
    id: 20,
    image: '/swiper_video/43.WebM',
    title: 'Twentieth Slide',
  },
];

const SwiperComponent: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const currentIndex = swiper.realIndex;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentIndex) {
        if (hoveredIndex !== index) {
          video.play().catch(() => {});
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  useEffect(() => {
    const currentIndex = swiperRef.current?.realIndex;
    if (hoveredIndex !== null && currentIndex === hoveredIndex) {
      const video = videoRefs.current[hoveredIndex];
      if (!video) return;

      const handleEnded = () => {
        if (hoveredIndex === currentIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      };

      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [hoveredIndex]);

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        '& .swiper-pagination': {
          paddingBottom: '20px',
        },
        '& .swiper-pagination-bullet': {
          width: 20,
          height: 2,
          borderRadius: 2,
          backgroundColor: 'rgba(255,255,255,0.3)',
          opacity: 1,
          marginX: '6px',
          transition: 'all 0.3s ease',
        },
        '& .swiper-pagination-bullet-active': {
          backgroundColor: 'white',
        },
        '& .swiper-button-prev, & .swiper-button-next': {
          color: 'white',
          width: 48,
          height: 48,
          top: '50%',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.4)',
            borderRadius: '50%',
            transition: 'background-color 0.3s ease',
          },
          '&::after': {
            fontSize: '20px',
            fontWeight: 700,
          },
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        centeredSlides={true}
        grabCursor={true}
        parallax={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        navigation
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => handleSlideChange(), 0);
        }}
        onSlideChange={handleSlideChange}
      >
        {swiperItems.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Box
              onMouseEnter={() => {
                const swiper = swiperRef.current;
                if (swiper && swiper.realIndex === index) {
                  setHoveredIndex(index);
                  swiper.autoplay.stop();
                  videoRefs.current[index]?.play().catch(() => {});
                }
              }}
              onMouseLeave={() => {
                const swiper = swiperRef.current;
                if (swiper && swiper.realIndex === index) {
                  setHoveredIndex(null);
                  swiper.autoplay.start();
                  handleSlideChange();
                }
              }}
            >
              <SwiperCard
                image={item.image}
                title={item.title}
                videoRef={(el) => (videoRefs.current[index] = el)}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperComponent;
