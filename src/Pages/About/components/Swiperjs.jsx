import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Images
import img1 from "../../../assets/Images/logo/IMG_20260907_094750_542.jpg";
import img2 from "../../../assets/Images/logo/IMG_20260907_094750_607.jpg";
import img3 from "../../../assets/Images/logo/IMG_20260907_094750_781.jpg";
import img4 from "../../../assets/Images/logo/IMG_20260907_094750_822.jpg";
import img5 from "../../../assets/Images/logo/IMG_20260907_094750_956.jpg";
import img6 from "../../../assets/Images/logo/IMG_20260907_094751_009.jpg";
import img7 from "../../../assets/Images/logo/IMG_20260907_094751_062.jpg";
import img8 from "../../../assets/Images/logo/IMG_20260907_094751_110.jpg";
import img9 from "../../../assets/Images/logo/IMG_20260907_094751_268.jpg";
import img10 from "../../../assets/Images/logo/IMG_20260907_094751_403.jpg";
import img11 from "../../../assets/Images/logo/IMG_20260907_094756_148.jpg";
import img12 from "../../../assets/Images/logo/IMG_20260907_094800_618.jpg";
import img13 from "../../../assets/Images/logo/IMG_20260907_094800_624.jpg";
import img14 from "../../../assets/Images/logo/IMG_20260907_094800_685.jpg";
import img15 from "../../../assets/Images/logo/IMG_20260907_094800_864.jpg";
import img16 from "../../../assets/Images/logo/IMG_20260907_094800_875.jpg";
import img17 from "../../../assets/Images/logo/IMG_20260907_094801_054.jpg";
import img18 from "../../../assets/Images/logo/IMG_20260907_094801_236.jpg";
import img19 from "../../../assets/Images/logo/IMG_20260907_094801_455.jpg";
import img20 from "../../../assets/Images/logo/IMG_20260907_094801_497.jpg";

function Swiperjs() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  return (
    <div className="w-full overflow-hidden bg-black">
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
            spaceBetween: 15,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          768: {
            slidesPerView:6,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },

          1280: {
            slidesPerView: 9,
            spaceBetween: 30,
          },

          1536: {
            slidesPerView: 9,
            spaceBetween: 30,
          },
        }}
        className="mySwiper w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                flex
                items-center
                justify-center
                w-full
                h-[90px]
                sm:h-[100px]
                md:h-[110px]
                lg:h-[120px]
                xl:h-[130px]
                px-2
              "
            >
              <img
                src={image}
                alt={`Logo ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-contain
                  block
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swiperjs;