/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Layout from "../components/layout/layout";

const UkraineInfo = () => {
  return (
    <Layout styles="text-white bg-[#2D2D2D]">
      <section className="bg-[#2D2D2D]  md:py-20 md:px-4  text-white">
        <div className="max-w-[87rem] mx-auto flex md:flex-col justify-between md:items-start  text-white">
          <div className="space-y-4">
            <h1 className="text-2xl">Information on Ukraine and coronavirus</h1>
          </div>
        </div>
        <div className="max-w-[87rem] w-full  mx-auto grid grid-rows-2 gap-5 md:grid-cols-2 pt-5 ">
          {[
            {
              title:
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY",
              link: [
                "Shrinking from the heat",
                "Reactive fabrics respond to changes in temperature",
              ],
            },
            {
              title:
                "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY",
              link: [
                "Knit an Aalto hat for yourself or a friend!",
                "Follow Marja Niemi and Outi Elina Kansanen's knitting pattern to make a lovely gift for someone special",
              ],
            },
          ].map((e, idx) => {
            return (
              <div className="text-white border-2 grid items-end border-white grid-cols-4">
                <div className="px-7 mt-5 col-span-3 py-7">
                  <p className="text-lg">Ukraine war</p>
                  <p>
                    On this page, we will gather information on how Russia s
                    i...
                  </p>
                </div>
                <img
                  class="w-64 h-44 object-cover object-center aspect-square"
                  src={e.title}
                  alt=""
                  className="mb-3"
                />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default UkraineInfo;
