/* eslint-disable react/jsx-key */
import Link from "next/link";
import React from "react";
import Layout from "../components/layout/layout";

function FollowUs() {
  return (
    <>
      {/* section with yello icons */}
      <Layout styles="bg-yellow-500 ">
        <div className="bg-gray1  relative z-30 space-y-3">
          <div className="h-[25rem] bg-blue1 w-full text-black flex flex-col items-center justify-center relative z-10">
            <h2 className="font-bold text-6xl hover:pr-24 relative z-30">
              Follow Us
            </h2>
            <div className="relative z-30 mt-3">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (item, index) => {
                  return (
                    <Link
                      key={index}
                      href="/"
                      className="underline text-3xl hover:text-black hover:bg-white w-fit"
                    >
                      {item},{" "}
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default FollowUs
