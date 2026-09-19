import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

function Swiperjs() {
  return (
    <Swiper
  
      loop={true}
      speed={6000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      
      breakpoints={{
        0: {
          slidesPerView: 4,
          spaceBetween: 30,
        },

        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },

        1280: {
          slidesPerView: 7,
          spaceBetween: 40,
        },

        1536: {
          slidesPerView: 9,
          spaceBetween: 40,
        },
      }}

      className="mySwiper flex *:items-center p-4"
    >
      <SwiperSlide>
        <img
           className=""
          src="src/assets/Images/logo/IMG_20260907_094750_542.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
           className=""
          src="src/assets/Images/logo/IMG_20260907_094750_607.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
           className=""
          src="src/assets/Images/logo/IMG_20260907_094750_781.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094750_822.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="src/assets/Images/logo/IMG_20260907_094750_956.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094751_009.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094751_062.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094751_110.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094751_268.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094751_403.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094756_148.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094800_624.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094800_685.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094800_864.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094800_875.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094801_054.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094801_236.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094801_455.jpg" alt="" />
      </SwiperSlide><SwiperSlide>
        <img className="" src="src/assets/Images/logo/IMG_20260907_094801_497.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Swiperjs;
