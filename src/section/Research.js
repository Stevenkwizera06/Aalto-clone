import React from "react";
import Wrapper from "../components/Wrapper";
import reseach from "../../public/reseach.webp";
import Image from "next/image";

export default function Research() {
  const data = [
    {
      title: "Research & Art",
      text: "Select a solution that suits you, ranging from individual courses to programmes that are open ",
      img: reseach,
    },
    {
      title: "Solve the SDGs 2023",
      text: "Select a solution that suits you, ranging from individual courses to programmes that are open ",
      img: reseach,
    },
  ];
  return (
    <div className="pt-14 pb-[96px] bg-[#2D2D2D]">
      <Wrapper>
        <h2 className="heading mb-4 text-white">
          {" "}
          Read about our research and donate{" "}
        </h2>
        <p className="text mb-6 text-white">
          At Aalto University, we create the conditions for innovation, economic
          growth, employment and wellbeing. A gift to the university is an
          investment in a better future.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          {data.map((el, i) => {
            return (
              <div key={i} className={`bg-white flex-1`}>
                <div className="relative w-full aspect-[819/356]">
                  <Image alt="" src={el.img} className="object-cover" fill />
                </div>
                <div className="p-4 pb-3">
                  <h4 className="text--md">{el.title}</h4>
                  <p className="text mb-[28px] mt-[25px]">{el.text}</p>
                  <span className="text--sm">{el.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
