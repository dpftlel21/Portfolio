import { useState } from "react";
import profile from "../assets/Images/profile2.jpg";
import { Icon } from "@iconify/react";

const Header = () => {
  const HeaderStyle =
    "w-[30vh] h-[50vh] mx-[5%] flex flex-col justify-center items-center fixed top-[25%] rounded-xl text-2xl bg-[#a0b3f3] shadow font-bold text-white";
  const buttonStyle = "w-[3vh] h-[3vh]";

  const headerItems = [
    { label: "About Me", id: "intro" },
    { label: "Project", id: "project" },
    { label: "Stack", id: "stack" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  // 각 섹션으로 스크롤 이동하는 함수
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
    if (itemId) {
      scrollToSection(itemId);
    }
  };

  const handleGithubClick = () => {
    // Github 링크로 이동
    window.location.href = "https://github.com/dpftlel21";
  };

  const handleVelogClick = () => {
    // Velog 링크로 이동
    window.location.href = "https://velog.io/@dpftlel21";
  };

  return (
    <nav className={HeaderStyle}>
      <div className="flex justify-center items-center text-base">
        <img src={profile} className="w-[8vh] h-[8vh] rounded-xl" />
        <div className="flex flex-col justify-center items-center ml-2 text-base">
          <h1>프론트엔드 개발자</h1>
          <h1 className="mt-2">이인우</h1>
        </div>
      </div>

      {/* 스크롤 이벤트 구현 */}
      <div className="w-full text-2xl font-bold flex flex-col justify-center items-center my-2">
        {headerItems.map((headerItem) => (
          <button key={headerItem.id} onClick={() => toggleMenu(headerItem.id)}>
            {headerItem.label}
          </button>
        ))}
      </div>

      <div className="w-[15vh] flex justify-around mt-[10%] items-center text-black">
        <button className={buttonStyle}>
          <Icon
            icon="teenyicons:pdf-solid"
            color="white"
            className="w-[95%] h-[95%]"
          />
        </button>
        <button className={buttonStyle} onClick={handleGithubClick}>
          <Icon icon="uil:github" color="white" className="w-[95%] h-[95%]" />
        </button>
        <button className={buttonStyle} onClick={handleVelogClick}>
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
