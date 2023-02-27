/* eslint-disable react/jsx-key */
import React from "react";

export default function University() {
  return (
    <>
      {/* bg section */}
      <div className="bg-[#2D2D2D]">
        <section
          className="py-52"
          style={{
            backgroundImage: `url("https://www.aalto.fi/sites/g/files/flghsv161/files/styles/s2560wc_1800w_400h_n/public/2020-01/unto_rautio_aalto_dsc5557_web.jpg?itok=vZ292N9N")`,
            backgroundColor: "#cccccc",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></section>

        <section className="-mt-56 max-w-[84rem] relative z-20 mx-auto lg:ml-24 bg-yellow-300 text-white">
          <div className="text-7xl font-bold py-10 px-10">
            Explore Aalto University
          </div>
          <div className="grid grid-cols-3 content-center border-t-2 border-black">
            {[1, 2, 3].map((e, idx) => {
              return (
                <div className=" border-r-2 border-r-black py-10">
                  <p className="text-center text-2xl font-semibold tracking-wide">
                    Study at Aalto
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
