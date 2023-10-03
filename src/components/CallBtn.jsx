import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/slice/ModalSlice";
import CallButton from "../assets/Images/callBtn.png";
import CallScreen from "./CallScreen";

const CallBtn = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleCallBtn = () => {
    dispatch(openModal());
  };

  return (
    <>
      <button
        onClick={handleCallBtn}
        className="w-[7vh] h-[7vh] fixed right-0 bottom-0 mr-8 mb-8 z-30 bg-white rounded-[30%]"
      >
        <img
          src={CallButton}
          alt="CallBtn"
          className="w-[7vh] h-[7vh] fixed right-0 bottom-0 mr-8 mb-8"
        />
      </button>
      {isOpen && <CallScreen />}
    </>
  );
};

export default CallBtn;
