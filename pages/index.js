/* eslint-disable react/jsx-no-undef */
import Events from "@/src/section/Events";
import Explore from "@/src/section/Explore";
import FollowUs from "@/src/section/FollowUs";
import Footer from "@/src/section/Footer";
import FreeSpace from "@/src/section/FreeSpace";
import Navbar from "@/src/section/Navbar";
import Research from "@/src/section/Research";
import Spotlight from "@/src/section/Spotlight";
import Student from "@/src/section/Student";
import UkraineInfo from "@/src/section/UkrainInfo";
import University from "@/src/section/University";

export default function Home() {
  return (
    <>
      <div className="bg-[#2D2D2D]">
        <Navbar />
        <Student />
        <Spotlight />
        <Events />
        <University />
        <Explore />
        <UkraineInfo />
        <FollowUs />
        <Research />
        <FreeSpace />
        <Footer />
      </div>
    </>
  );
}
