/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../components/layout/layout";
import Wrapper from '../components/Wrapper';

function QuickLinks() {
  return (
    <>
      {/* section with yellow icons */}
      <Layout styles="bg-white">
        <section className="-mt-20 pb-32 pt-40">
          <div className="text-black space-y-7">
            <div className="text-center text-2xl">Important QuickLinks</div>
            <div className="max-w-6xl mx-auto justify-between lg:flex-row flex-col">
              {[1, 2, 3].map((e, idx) => {
                return (
                  <div className="flex items-center">
                    <div className="bg-yellow-500 p-7 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-folder"
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <h1 className="text-2xl">For personnel</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default QuickLinks
