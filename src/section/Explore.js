/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../components/layout/layout";


function Explore() {
  return (
   
      <Layout styles="bg-white text-black py-20">
        <div className="max-w-[80rem] mx-auto flex md:flex-col justify-between items-center text-black">
          <div className="space-y-4">
            <h1 className="text-4xl">Read-about-our-research-and-donate</h1>
            <p className="max-w-4xl">
              At Aalto University, we create the conditions for innovation,
              economic growth, employment and wellbeing. A gift to the
              university is an investment in a better future.
            </p>
          </div>
        </div>
        <div className="max-w-[] lg:grid-cols-2  mx-auto grid grid-cols-2 gap-5 md:grid-cols-1 pt-5 ">
          {[
            {
              img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2018-06/sensual-mathematics-exhibition-by-henri-vogt_11_0.jpg?h=b2774bcf&itok=CTQXmJDV",
              text: [
                "Shrinking from the heat",
                "Reactive fabrics respond to changes in temperature",
              ],
            },
            {
              img: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2021-10/Unto_Rautio_Aalto_UNT6810.jpg?h=ca5d94f6&itok=bmFUAUsQ",
              text: [
                "Knit an Aalto hat for yourself or a friend!",
                "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special",
              ],
            },
          ].map((e, idx) => {
            return (
              <div className="text-black">
                <img
                  class="object-cover object-center aspect-square h-56 w-full"
                  src={e.img}
                  alt=""
                  className="mb-3"
                />
                <div className="">
                  <p>School of Arts, Design and Architecture</p>
                  <p>
                    The School of Arts, Design and Architecture is one of the...
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    
  );
}
export default Explore
