import Detail from "./Detail";
import InfoCard from "./InfoCard";
import whale from "../../assets/Images/cat.jpg";
import Header from "../Header";
import CallBtn from "../CallBtn";

const Main = () => {
  return (
    <>
      <main
        className="w-screen h-screen justify-center items-center"
        style={{
          background: `url(${whale})`, // 이미지를 백그라운드로 설정
          backgroundSize: "cover", // 이미지를 꽉 채우도록 설정
          backgroundRepeat: "no-repeat", // 이미지 반복 없음
          backgroundPosition: "center", // 이미지 위치 중앙
        }}
      >
        <Header />

        <InfoCard />
      </main>
      <CallBtn />
      <Detail />
    </>
  );
};

export default Main;
