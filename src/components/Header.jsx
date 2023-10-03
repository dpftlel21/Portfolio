import profile from "../assets/Images/profile2.jpg";
import { Icon } from "@iconify/react";

const Header = () => {
  const HeaderStyle =
    "w-[30vh] h-[50vh] mx-[5%] flex flex-col justify-center items-center fixed top-[25%] rounded-xl text-2xl bg-[#a0b3f3] shadow font-bold text-white";

  const buttonStyle = "w-[3vh] h-[3vh]";
  return (
    <nav className={HeaderStyle}>
      <div className="flex justify-center items-center text-base">
        <img src={profile} className="w-[8vh] h-[8vh] rounded-xl" />
        <div className="flex flex-col justify-center items-center ml-2 text-base">
          <h1>프론트엔드 개발자</h1>
          <h1 className="mt-2">이인우</h1>
        </div>
      </div>

      <button>About me?</button>
      <button>My Projects</button>
      <button>My Stack</button>

      <div className="w-[15vh] flex justify-around mt-[10%] items-center text-black">
        <button className={buttonStyle}>
          <Icon
            icon="teenyicons:pdf-solid"
            color="white"
            className="w-[95%] h-[95%]"
          />
        </button>
        <button className={buttonStyle}>
          <Icon icon="uil:github" color="white" className="w-[95%] h-[95%]" />
        </button>
        <button className={buttonStyle}>
          <Icon
            icon="simple-icons:velog"
            color="white"
            className="w-[95%] h-[95%]"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
