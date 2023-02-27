/* eslint-disable react/jsx-key */
import Link from "next/link";
import React from "react";
import Layout from "../components/layout/layout";

function FollowUs() {
  return (
    <>
      {/* section with yello icons */}
      <Layout styles="bg-yellow-300  py-24">
        <div className="text-black space-y-7">
          <div className="text-center text-7xl font-extrabold">Follow us</div>
          <div className="max-w-xl mx-auto flex justify-between">
            <div className="flex items-center">
              <Link className="text-4xl underline space-x-1" href="/">
                <span className="hover:bg-white">facebook,</span>
                <span className="hover:bg-white">Twitter,</span>
                <span className="hover:bg-white">Instagram,</span>
                <span>&</span>
                <span className="hover:bg-white">Linkdin</span>

              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default FollowUs
