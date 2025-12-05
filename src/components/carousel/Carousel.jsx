import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import Card from './Card';
import EventCard from './EventCard';
import { provincesData } from '@/data/provinces';


const Carousel = () => {
  const provinces = Object.values(provincesData);
  const events = provinces.flatMap(province => province.eventos || []);
  const combinedData = [...provinces, ...events];
  
  const [swiper, setSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.params.pagination.el = paginationRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.navigation.update();
      swiper.pagination.update();
    }
  }, [swiper]);

  const paginationStyles = `
    .swiper-pagination-bullet {
      width: 20px;
      height: 6px;
      border-radius: 3px;
      background: #ccc;
      opacity: 1;
      transition: all 0.2s ease-in-out;
    }

    .swiper-pagination-bullet-active {
      width: 30px;
      background: orange;
    }
  `;

  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      <style>{paginationStyles}</style>
      <div style={{ position: 'relative' }}>
        <Swiper
          modules={[Grid, Navigation, Pagination]}
          onSwiper={setSwiper}
          spaceBetween={5}
          slidesPerView={4}
          grid={{
            rows: 2,
            fill: "row",
          }}
          pagination={{ clickable: true, el: paginationRef.current }}
          style={{
            width: '100%',
            '--swiper-grid-row-gap': '5px'
          }}
        >
          {combinedData.map((item, index) => (
            <SwiperSlide key={index}>
              {item.nombre ? <Card province={item} /> : <EventCard evento={item} />}
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={navigationPrevRef} style={{ position: 'absolute', left: '-50px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 10 }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '24px', height: '24px'}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div ref={navigationNextRef} style={{ position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 10 }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '24px', height: '24px'}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div ref={paginationRef} style={{ marginTop: '10px', textAlign: 'center', position: 'relative', zIndex: 10 }} />
    </div>
  );
};

export default Carousel;
