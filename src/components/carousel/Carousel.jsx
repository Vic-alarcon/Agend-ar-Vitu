import { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import EventCard from '@/components/cards/EventCard';
import { provincesData } from '@/data/provinces';

const Carousel = ({ onBooking, events }) => {
  // ------------------ DATA ------------------
  const carouselEvents = useMemo(() => {
    if (events) return events;

    const list = [];
    Object.entries(provincesData).forEach(([, pdata]) => {
      (pdata.eventos || []).forEach((ev) => {
        list.push({
          titulo: ev.titulo || '',
          fecha: ev.fecha || '',
          lugar: ev.lugar || '',
          precio: ev.precio != null ? ev.precio : 0,
          categoria: ev.categoria || '',
          imagen: ev.imagen || '',
        });
      });
    });

    return list;
  }, [events]);

  // ------------------ SWIPER ------------------
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="w-4/5 mx-auto max-w-6xl relative md:group">
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Grid, Pagination]}
        spaceBetween={15}
        pagination={{ clickable: true }}
        className="w-full pb-10 sm:pb-20 lg:pb-14"
        style={{ '--swiper-grid-row-gap': '15px' }}
        breakpoints={{
          0: { slidesPerView: 1, grid: { rows: 1 } },
          640: { slidesPerView: 2, grid: { rows: 1 } },
          768: { slidesPerView: 2, grid: { rows: 2 } },
          1024: { slidesPerView: 3, grid: { rows: 2 } },
          1280: { slidesPerView: 4, grid: { rows: 2 } },
        }}
      >
        {carouselEvents.map((item, index) => (
          <SwiperSlide key={`${item.titulo}-${index}`}>
            <EventCard {...item} onBooking={() => onBooking(item)} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PREV */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute -left-10 lg:-left-16 top-1/2 -translate-y-1/2 z-10 
                   bg-gradient-to-br from-teal-400 to-teal-600 text-white 
                   rounded-xl w-12 h-12 lg:w-14 lg:h-14 shadow-lg 
                   transition-all flex items-center justify-center 
                   hover:scale-110 opacity-0 md:group-hover:opacity-100 md:opacity-100"
      >
        ◀
      </button>

      {/* NEXT */}
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute -right-10 lg:-right-16 top-1/2 -translate-y-1/2 z-10 
                   bg-gradient-to-br from-teal-400 to-teal-600 text-white 
                   rounded-xl w-12 h-12 lg:w-14 lg:h-14 shadow-lg 
                   transition-all flex items-center justify-center 
                   hover:scale-110 opacity-0 md:group-hover:opacity-100 md:opacity-100"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;

