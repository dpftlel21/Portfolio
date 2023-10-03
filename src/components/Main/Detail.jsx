import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const Detail = () => {
  const DetailContainer =
    "w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#b1c4e0] to-[#c6d7f3] font-semibold text-white";

  const cardContainer =
    "w-[120vh] h-[50vh] ml-[20%] flex flex-col justify-center items-center rounded-xl shadow bg-gray-100";

  const ProjectCard =
    "w-[95%] h-[95%] rounded-xl flex flex-col justify-center items-center";

  const GoButton =
    "w-[10vh] h-[3vh] mt-[2%] mx-[1%] rounded-xl bg-white text-black text-sm hover:translate-y-[3px] transition duration-300 ease-in-out hover:bg-[#c6d7f3]";

  return (
    <div className={DetailContainer}>
      <div className={cardContainer}>
        <h1 className="text-black text-2xl mb-4">Project</h1>
        <div className="w-[120vh] flex justify-center items-center ">
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
              <div className={ProjectCard}>
                <img
                  src="https://user-images.githubusercontent.com/101685650/272232218-deef89a7-9818-42a7-be80-d88d03e8790f.gif"
                  className="w-[28vh] h-[12vh] "
                />
                <h2>Sound Oasis</h2>
                <p className="text-sm my-[2%]">
                  개발 기간 : 2023.08.24 ~ 2023.09.22{" "}
                </p>
                <p className="text-xs">
                  Sound Oasis는 날씨, 활동, 기분에 따라 맞춤 음악을 추천하고,
                  사용자들끼리 음악을 공유하며 연결, 사용자들이 자신만의
                  플레이리스트를 공유하는 웹 사이트를 기획하고, 제작했습니다.
                </p>
                <div className="w-full flex justify-center">
                  <button className={GoButton}>Github</button>
                  <button className={GoButton}>배포 싸이트</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={ProjectCard}>
                <img
                  src="https://user-images.githubusercontent.com/101685650/272234084-fa8be927-911d-4a49-a0c4-ce146d1b653d.gif"
                  className="w-[28vh] h-[12vh]"
                />
                <h2>빈진우</h2>
                <p className="text-sm my-[2%]">
                  개발 기간 : 2023.7.17 ~ 2023.08.09
                </p>
                <p className="text-xs">
                  사용자의 위치에 기반하여 주변 헬스장을 알려주며 헬스장 클릭시
                  그 헬스장에 대한 정보를 얻을 수 있도록 지원하는 웹입니다.
                  추가적으로, 자신만의 운동 루틴, 신체 정보 등을 기록하고,
                  관리할 수 있도록 지원합니다.
                </p>
                <div className="w-full flex justify-center">
                  <button className={GoButton}>Github</button>
                  <button className={GoButton}>배포 싸이트</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Detail;
