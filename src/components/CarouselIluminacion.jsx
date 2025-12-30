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
  "/assets/proyectos/iluminacion/IMG-20230707-WA0107.jpeg",
  "/assets/proyectos/iluminacion/IMG-20230922-WA0338.jpg",
  "/assets/proyectos/iluminacion/IMG-20230922-WA0342.jpg",
  "/assets/proyectos/iluminacion/IMG-20230922-WA0344.jpg",
  "/assets/proyectos/iluminacion/IMG-20230922-WA0348.jpg",
  "/assets/proyectos/iluminacion/IMG-20230922-WA0349.jpg",
  "/assets/proyectos/iluminacion/IMG-20231002-WA0132.jpeg",
  "/assets/proyectos/iluminacion/IMG-20231002-WA0135.jpg",
  "/assets/proyectos/iluminacion/IMG-20231004-WA0269.jpg",
  "/assets/proyectos/iluminacion/IMG-20231005-WA0233.jpeg",
  "/assets/proyectos/iluminacion/IMG-20231005-WA0234.jpeg",
  "/assets/proyectos/iluminacion/IMG-20231005-WA0240.jpeg",
  "/assets/proyectos/iluminacion/IMG-20231005-WA0241(1).jpeg",
  "/assets/proyectos/iluminacion/IMG-20231005-WA0241.jpeg"
];

export default function CarouselIluminacion() {
  const [zoomed, setZoomed] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleZoom = (index) => {
    setZoomed(index === zoomed ? null : index);
  };

  return (
    <div style={{ width: "90%", margin: "auto", paddingTop: "30px", paddingBottom: "50px" }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
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
        style={{ height: "400px" }}
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
                alt={`iluminacion-${i}`}
                onClick={() => handleZoom(i)}
                style={{
                  width: isZoomed ? "95%" : isCenter ? "85%" : "70%",
                  transform: isZoomed ? "scale(1.2)" : "scale(1)",
                  height: "300px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "15px",
                  opacity: isCenter ? 1 : 0.5,
                  filter: isCenter ? "none" : "blur(1px) brightness(0.8)",
                  transition: "all 0.35s ease",
                  boxShadow: isZoomed
                    ? "0 10px 30px rgba(0,0,0,0.8)"
                    : isCenter
                    ? "0 5px 20px rgba(0,0,0,0.5)"
                    : "0 2px 10px rgba(0,0,0,0.3)"
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
