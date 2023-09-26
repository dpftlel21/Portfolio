import CallButton from "../assets/Images/callBtn.png";

const CallBtn = () => {
  return (
    <>
      <button className="w-[7vh] h-[7vh] fixed right-0 bottom-0 mr-8 mb-8 z-30 bg-white rounded-[30%] border-2 border-[#444]">
        <img
          src={CallButton}
          alt="CallBtn"
          className="w-[7vh] h-[7vh] fixed right-0 bottom-0 mr-8 mb-8"
        />
      </button>
    </>
  );
};

export default CallBtn;
