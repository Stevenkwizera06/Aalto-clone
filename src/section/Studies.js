import Card1 from "../components/ui/Card1";
import thread from "../../public/thread.jpg";
import Layout from "../components/layout/layout";
const Studies = () => {
  return (
    <Layout styles="px-32 pb-20 pt-10 bg-white">
      <h2 className="text-2xl py-10 text-black">
        Studies and courses open to all
      </h2>
      <div className="grid grid-cols-3 space-x-28">
        <Card1
          image={thread}
          title="Lifewide Learning"
          paragraph={
            "Select a solution that suits you, ranging from individual courses to programmes that are open for all."
          }
        />
        <Card1
          image={thread}
          title="Lifewide Learning"
          paragraph={
            "Select a solution that suits you, ranging from individual courses to programmes that are open for all."
          }
        />
        <Card1
          image={thread}
          title="Lifewide Learning"
          paragraph={
            "Select a solution that suits you, ranging from individual courses to programmes that are open for all."
          }
        />
      </div>
    </Layout>
  );
};

export default Studies;
