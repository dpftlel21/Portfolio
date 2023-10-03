import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow } from "swiper/modules";

const Detail = () => {
  const cardContainer =
    "w-[120vh] h-[50vh] ml-[20%] flex justify-center items-center rounded-xl shadow bg-gray-100";

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#b1c4e0] to-[#c6d7f3] font-semibold text-white">
      <div className={cardContainer}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="img/What Eat Today.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Detail;
