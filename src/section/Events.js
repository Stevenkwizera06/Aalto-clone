/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../components/layout/layout";
import Card1 from "../components/ui/Card1";
import sciencedays from "../../public/sciencedays.png";
import sdgs from "../../public/sdgs.png";
import futures from "../../public/futures.jpg";
import Button from "../components/ui/Button";
// import Wrapper from '../components/Wrapper';

const Events = () => {
  return (
    <section className=" bg-[#252525] pb-24 px-4 md:max-w-7xl md:mx-auto md:px-20">
      <div className="max-w-[87rem] mx-auto pt-20 flex md:flex-col justify-between md:items-start items-center text-white">
        <div className="space-y-3">
          <h1 className="text-[1.7rem]">Join our many events</h1>
          <p className="text-xl">
            Find more current news and interesting events on the News and events
            page.
          </p>
        </div>
        <div>
          <button className="border hidden md:block border-white py-2 px-8 text-sm tracking-wide rounded-full">
            See all events
          </button>
        </div>
      </div>
      <div className="max-w-[87rem]  mx-auto grid grid-cols-1 gap-5 md:grid-cols-3 pt-5 ">
        {[
          {
            title:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_914w_ah_n/public/2023-02/solvethesdgs_7.png?itok=3zTx6Lu6",
            link: [
              "Shrinking from the heat",
              "Reactive fabrics respond to changes in temperature",
            ],
          },
          {
            title:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_914w_ah_n/public/2023-02/energy_futures_1920x1080_orange.jpg?itok=5ol6Q-Wo",
            link: [
              "Knit an Aalto hat for yourself or a friend!",
              "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special",
            ],
          },
          {
            title:
              "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_1380w_600h_n/public/2023-01/SSD2023_hero_image_1920x1200px_150dpi_2.png?h=3bf3b255&itok=tP6_uIIV",
            link: [
              "Aalto Startup Center makes global top three in 2021-2022 university business accelerator ranking",
              "UBI Global World Benchmark Study ranks top",
            ],
          },
        ].map((e, idx) => {
          return (
            <div className="text-white bg-[#2D2D2D] flex h-full content-start flex-col justify-between">
              <img
                src={e.title}
                alt=""
                className={`${
                  idx === 2 ? "mb-5" : ""
                } h-52 md:h-36 object-cover object-center aspect-video`}
              />
              <div className="px-7 md:px-4 space-y-3">
                {e.link.map((val, ix) => {
                  return (
                    <p className={`${ix === 0 ? "text-xl" : ""} `}>{val}</p>
                  );
                })}
              </div>
              <div className="px-7 md:px-4 mb-3">
                <p>25-1 20231 News</p>
              </div>
            </div>
          );
        })}
        <button className="border  md:hidden border-white text-white py-2 px-4 text-sm tracking-wide rounded-full">
          See all events
        </button>
      </div>
    </section>
  );
};

export default Events;
