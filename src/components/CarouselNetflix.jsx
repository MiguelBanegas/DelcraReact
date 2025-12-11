import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/assets/proyectos/1.png",
  "/assets/proyectos/2.png",
  "/assets/proyectos/3.png",
  "/assets/proyectos/4.png",
  "/assets/proyectos/5.png"
];

export default function CarouselNetflix() {
  const [zoomed, setZoomed] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleZoom = (index) => {
    setZoomed(index === zoomed ? null : index);
  };

  return (
    <div style={{ width: "90%", margin: "auto", paddingTop: "30px" }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ height: "350px" }}
      >
        {images.map((src, i) => {
          const isCenter = i === activeIndex;
          const isZoomed = zoomed === i;

          return (
            <SwiperSlide
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.4s ease"
              }}
            >
              <img
                src={src}
                alt={`img-${i}`}
                onClick={() => handleZoom(i)}
                style={{
                  width: isZoomed ? "95%" : isCenter ? "85%" : "70%",
                  transform: isZoomed ? "scale(1.25)" : "scale(1)",
                  height: "auto",
                  cursor: "pointer",
                  borderRadius: "12px",
                  opacity: isCenter ? 1 : 0.45, // sombreado lateral
                  filter: isCenter ? "none" : "blur(1px) brightness(0.8)",
                  transition: "all 0.35s ease",
                  boxShadow: isZoomed
                    ? "0 0 25px rgba(0,0,0,0.7)"
                    : isCenter
                    ? "0 0 15px rgba(0,0,0,0.5)"
                    : "0 0 10px rgba(0,0,0,0.3)"
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
