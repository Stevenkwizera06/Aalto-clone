import React from 'react'
import Layout from "../components/layout/layout";
import Card1 from "../components/ui/Card1";
import sciencedays from "../../public/sciencedays.png";
import sdgs from "../../public/sdgs.png";
import futures from "../../public/futures.jpg";
import Button from "../components/ui/Button";


const Events = ({ mainTitle, btnName, className, styles }) => {
  return (
    <div className={`${className} lg:px-28 lg:py-28 px-4 py-1 text-black bg-white `}>
      <div className="relative">
        <h2 className="text-3xl">Events</h2>
        <h3 className="text-lg pt-3">
          Find more current news and interesting events on the{" "}
          <span className="underline hover:bg-neutral-700 text-black">
            News and events page.
          </span>
        </h3>
        <Button
          name={"see All news about Aalto University"}
          link="/"
          className={
            "absolute text-sm hover:border-transparent h right-0 bottom-10 border"
          }
        />
      </div>
      <div className="flex gap-5 pt-5 flex-col lg:flex-row">
        <Card1
          image={sdgs}
          title="Solve the SDGs 2023"
          paragraph={
            "A hackathon on two continents for one purpose: creating solutions for solving Sustainable Development Goals."
          }
          date={"21.2.2023"}
          cat={"News"}
          className={styles}
        />
        <Card1
          image={futures}
          title={
            "Sustainability Science Days 2023: PATHWAYS OF HOPE – Knowledge, Actions, Solutions"
          }
          paragraph={"The Sustainability science Days (SSD)"}
          date={"21.2.2023"}
          cat={"News"}
          className={styles}
        />
        <Card1
          image={sciencedays}
          title="Shrinking From the heat"
          paragraph={"Reactive fabrics respond to changes in temperature"}
          date={"21.2.2023"}
          cat={"News"}
          className={styles}
        />
      </div>
    </div>
  );
};

export default Events;
