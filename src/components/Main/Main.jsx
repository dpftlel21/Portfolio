import Detail from "./Detail";
import InfoCard from "./InfoCard";
import Header from "../Header";
import Stack from "./Stack";

const Main = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#b1c4e0] to-[#c6d7f3] font-semibold text-white">
        <InfoCard />
      </main>
      <Detail />
      <Stack />
    </>
  );
};

export default Main;
