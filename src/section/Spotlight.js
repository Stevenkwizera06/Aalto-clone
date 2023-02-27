import Layout from "../components/layout/layout";
import Card1 from "../components/ui/Card1";
import thread from "../../public/thread.jpg";
import cap from "../../public/cap.jpg";
import people from "../../public/people.jpg";
import Button from "../components/ui/Button";

const Spotlight = ({ mainTitle, btnName, className, styles }) => {
  return (
    <div
      className={`${className} lg:px-28 px-4 py-1 lg:py-28 text-white bg-bg-[#2D2D2D] `}
    >
      <div className="relative">
        <h2 className="text-3xl">Sportilight</h2>
        <h3 className="text-lg pt-3">
          Find more current news and interesting events on the{" "}
          <span className="underline hover:bg-neutral-700 text-white">
            News and events page.
          </span>
        </h3>
        <Button
          name={"see All news about Aalto University"}
          link="/"
          className={
            "absolute text-sm hover:border-transparent h right-0 bottom-10 border "
          }
        />
      </div>

      <div className="flex gap-5 pt-5 flex-col lg:flex-row">
        <Card1
          image={thread}
          title="Shrinking From the heat"
          paragraph={"Reactive fabrics respond to changes in temperature"}
          date={"21.2.2023"}
          cat={"News"}
          className={styles}
        />
        <Card1
          image={cap}
          title="Knit an Aalto hat for yourself or a friend!"
          paragraph={
            "Follow Marja Niemi and Outi Elina Kansanen’s knitting pattern to make a lovely gift for someone special"
          }
          date={"21.2.2023"}
          cat={"News"}
          className={styles}
        />
        <Card1
          image={people}
          title={
            "Aalto Startup Center makes global top three in 2021-2022 university business accelerator ranking"
          }
          date={"21.2.2023"}
          cat={"News"}
          className={styles}
        />
      </div>
    </div>
  );
};

export default Spotlight;
