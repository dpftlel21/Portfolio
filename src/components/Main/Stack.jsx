const Stack = () => {
  const DetailContainer =
    "w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#b1c4e0] to-[#c6d7f3] font-semibold text-white";

  const cardContainer =
    "w-[120vh] h-[50vh] ml-[20%] flex flex-col justify-center items-center rounded-xl shadow bg-gray-100";

  const StackContainer =
    "w-[30%] h-[75%] rounded-xl flex flex-col justify-center items-center bg-gradient-to-b from-[#a0b3f3] to-[#c6d7f3]";

  return (
    <div className={DetailContainer}>
      <div className={cardContainer}>
        <h1 className="text-black text-2xl">주요 기술 스택</h1>
        <div className="w-full h-[80%] flex justify-around items-center">
          <div className={StackContainer}></div>
          <div className={StackContainer}></div>
          <div className={StackContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
