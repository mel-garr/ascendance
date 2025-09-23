"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Gallery() {
  const images = Array.from({ length: 10 }, (_, i) => `/images/catalogue/p${i + 1}.png`);

  return (
    <div className="w-full max-w-[1600px] mx-auto p-8">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}      // Only slightly more than 1 slide visible
        loop={true}              
        navigation
        pagination={{ clickable: true }}
        spaceBetween={-120}      // Overlap side slides
        coverflowEffect={{
          rotate: 0,
          stretch: -100,         // collapse side slides more
          depth: 800,            // make side slides smaller
          modifier: 1,
          slideShadows: false,
        }}
        style={{ height: "900px" }} // bigger height for bigger images
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={src}
              alt={`Catalogue ${index + 1}`}
              style={{
                width: "100%",          // fill the slide
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  
}
