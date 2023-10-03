import { useDispatch } from "react-redux";
import { closeModal } from "../redux/slice/ModalSlice";
import iphone from "../assets/Images/Iphone2.png";
import NumberBtn from "./NumberBtn";

const CallScreen = () => {
  const phoneScreeen =
    "w-[24.2vh] h-[42.8vh] bg-white flex flex-col justify-center items-center  fixed bottom-[12%] right-[9.24%] border-l border-t border-solid ";

  const dispatch = useDispatch();

  const handleCloseBtn = () => {
    dispatch(closeModal());
  };

  return (
    <div
      className="w-[35vh] h-[65vh] justify-center items-center fixed bottom-0 right-[6.65%]"
      style={{
        background: `url(${iphone})`, // 이미지를 백그라운드로 설정
        backgroundSize: "cover", // 이미지를 꽉 채우도록 설정
        backgroundRepeat: "no-repeat", // 이미지 반복 없음
      }}
    >
      <div className={phoneScreeen}>
        <div className="w-full flex justify-center items-center">
          010-8917-5053
        </div>
        <NumberBtn />
      </div>
      <button
        onClick={handleCloseBtn}
        className="w-[5vh] h-[5vh] rounded-full bg-white fixed bottom-[6%] right-[14.4%] border border-solid border-gray-400"
      ></button>
    </div>
  );
};

export default CallScreen;
