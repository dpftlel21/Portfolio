import { Icon } from "@iconify/react";

const Stack = () => {
  const DetailContainer =
    "w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#b1c4e0] to-[#c6d7f3] font-semibold text-white";

  const cardContainer =
    "w-[120vh] h-[50vh] ml-[20%] flex flex-col justify-center items-center rounded-xl shadow bg-gray-100";

  const StackContainer =
    "w-[30%] h-[75%] rounded-xl flex flex-col justify-center items-center bg-gradient-to-b from-[#a0b3f3] to-[#c6d7f3]";

  const Language =
    "w-[70%] h-[20%] text-3xl border-b-2 border-solid border-b-gray-400 mb-1";

  const StackLists = "w-full h-[60%] flex flex-col  items-center";

  const Stack = "w-[70%] h-[20%] flex items-center";

  const StackIcon = "w-[4vh] h-[3vh] rounded-xl";

  return (
    <div className={DetailContainer}>
      <div className={cardContainer}>
        <h1 className="text-black text-2xl">주요 기술 스택</h1>
        <div className="w-full h-[80%] flex justify-around items-center">
          <div className={StackContainer}>
            <h1 className={Language}>Language</h1>
            <div className={StackLists}>
              <div className={Stack}>
                <Icon icon="logos:javascript" className={StackIcon} />
                <p>JavaScript</p>
              </div>
              <div className={Stack}>
                <Icon icon="logos:typescript-icon" className={StackIcon} />
                <p>TypeScript</p>
              </div>

              <div className={Stack}>
                <Icon icon="skill-icons:html" className={StackIcon} />
                <p>HTML</p>
              </div>

              <div className={Stack}>
                <Icon icon="skill-icons:css" className={StackIcon} />
                <p>CSS</p>
              </div>
            </div>
          </div>

          {/* 프레임워크 */}
          <div className={StackContainer}>
            <h1 className={Language}>FrameWork</h1>
            <div className={StackLists}>
              <div className={Stack}>
                <Icon icon="skill-icons:react-dark" className={StackIcon} />
                <p>React</p>
              </div>
            </div>
          </div>

          {/* 스타일링 */}
          <div className={StackContainer}>
            <h1 className={Language}>Styling</h1>
            <div className={StackLists}>
              <div className={Stack}>
                <Icon icon="devicon:tailwindcss" className={StackIcon} />
                <p>Tailwind</p>
              </div>

              <div className={Stack}>
                <Icon
                  icon="skill-icons:styledcomponents"
                  className={StackIcon}
                />
                <p className=" text-sm">Styled-Components</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
