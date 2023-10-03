import Detail from "./Detail";
import InfoCard from "./InfoCard";
import Header from "../Header";
import CallBtn from "../CallBtn";

const Main = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#b1c4e0] to-[#c6d7f3] font-semibold text-white">
        <InfoCard />
      </main>
      <CallBtn />
      <Detail />
    </>
  );
};

export default Main;
