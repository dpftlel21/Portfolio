import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCards } from "swiper/modules";

const cardContainer =
  "w-screen flex justify-center items-center text-2xl text-white";
const swiperContainer = "w-[80vh] overflow-x-hidden"; // 필요한 경우 너비 조절

const InfoCard = () => {
  return (
    <div className={cardContainer}>
      <div className="flex justify-center mt-20">
        <div className={swiperContainer}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            centeredSlides={true}
            slidesPerView={4}
            className="mySwiper"
          >
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide2</SwiperSlide>
            <SwiperSlide>slide3</SwiperSlide>
            <SwiperSlide>slide4</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-[50vh] flex flex-col text-xl">
        <h1>About</h1>
        <h1 className="mt-12">제 자신에 대한 간단한 정보들을 담았습니다!</h1>
        <h1 className="mt-12">카드를 드래그하여 옆으로 넘겨 보세요 !</h1>
      </div>
    </div>
  );
};

export default InfoCard;
