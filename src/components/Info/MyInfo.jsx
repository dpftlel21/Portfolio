import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Card.css";
import { EffectCards } from "swiper/modules";
import profile from "../../assets/Images/profile2.jpg";
import BasicInfo from "./BasicInfo";
import ThirdCard from "./ThirdCard";
import FourCard from "./FourCard";

const cardContainer =
  "w-[120vh] h-[50vh] ml-[20%]  flex justify-center items-center rounded-xl shadow bg-gray-100";
const swiperContainer = "w-[80vh] overflow-x-hidden"; // 필요한 경우 너비 조절

const MyInfo = () => {
  return (
    <>
      <main className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#b1c4e0] to-[#c6d7f3] font-semibold text-white">
        <div className={cardContainer}>
          <div className="flex justify-center">
            <div className={swiperContainer}>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                centeredSlides={true}
                slidesPerView={4}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center text-center">
                    <img
                      src={profile}
                      className="w-[95%] h-[20vh] rounded-xl mt-1"
                    />
                    <h1 className="my-[5%]">안녕하세요! </h1>
                    <h3 className="text-sm">
                      프론트엔드 개발자 이인우 입니다 !
                    </h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <BasicInfo />
                </SwiperSlide>
                <SwiperSlide>
                  <ThirdCard />
                </SwiperSlide>
                <SwiperSlide>
                  <FourCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col mr-[10%] text-lg text-black">
            <h1>About</h1>
            <h1 className="my-12">저의 간단한 정보들을 담았습니다!</h1>
            <h1>카드를 드래그하여 옆으로 넘겨 보세요 !</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyInfo;
