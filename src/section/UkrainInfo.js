import CardInfo from "../components/ui/CardInfo";
import thread from "../../public/thread.jpg";
import Image from "next/image";
import Layout from "../components/layout/layout";



const UkraineInfo = () => {
  return (
    <Layout styles="px-32 py-20 bg-white text-black">
      <h2 className="text-3xl pb-10">Information</h2>
      <div className="grid lg:grid-cols-2 gap-7 grid-cols-1">
        <CardInfo
          image={thread}
          title="Ukraine War"
          paragraph="On this page, we will gather information... "
        />
        <CardInfo
          image={thread}
          title="Information on Coronavirus"
          paragraph="Information on effects of Coronavirus... "
        />
      </div>
    </Layout>
  );
};

export default UkraineInfo;
