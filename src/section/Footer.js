// import React from "react";
// import Layout from "../components/layout/layout"


// export default function Footer() {
//   return (
//     <div className="max-w-7xl mx-auto px-20">
//       <div className="max-w-[87rem] mx-auto md:mt-24">
//         <div className="grid grid-rows-4 text-white md:grid-cols-4">
//           <div className=" space-y-8">
//             <div className="flex items-center">
//               <svg
//                 width="50px"
//                 height="50px"
//                 viewBox="0 0 128 128"
//                 fill="black"
//                 aria-hidden="true"
//                 role="img"
//                 class="iconify iconify--noto"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <path
//                   d="M115.37 117.77L77.78 17.81a2.242 2.242 0 0 0-2.1-1.45H52.32c-.94 0-1.77.58-2.1 1.45l-37.59 99.96c-.26.69-.17 1.46.25 2.06s1.1.97 1.84.97h24.64c.96 0 1.82-.62 2.13-1.54l5.7-17.18H80.8l5.71 17.18c.3.92 1.16 1.54 2.13 1.54h24.64a2.236 2.236 0 0 0 2.09-3.03zm-61.14-36.9L64 51.45l9.77 29.43H54.23z"
//                   fill="#ffffff"
//                 />
//               </svg>
//               <svg
//                 className="-ml-5"
//                 width="50px"
//                 height="40px"
//                 viewBox="0 0 64 64"
//                 aria-hidden="true"
//                 role="img"
//                 class="iconify iconify--emojione-monotone"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <g fill-rule="evenodd">
//                   <path
//                     d="M30.249 2.065C18.612 2.789 12.531 9.379 12 21.296h11.739c.147-4.128 2.451-7.214 6.741-7.669c4.211-.447 8.206.556 9.416 3.435c1.307 3.11-1.627 6.724-3.022 8.241c-2.582 2.813-6.776 4.865-8.95 7.9c-2.131 2.974-2.51 6.887-2.674 11.676h10.346c.145-3.062.349-5.995 1.742-7.898c2.266-3.092 5.65-4.541 8.486-6.983c2.709-2.334 5.559-5.147 6.043-9.501C53.32 7.466 42.683 1.289 30.249 2.065"
//                     fill="#ffffff"
//                   ></path>

//                   <ellipse
//                     cx="30.515"
//                     cy="55.567"
//                     rx="6.532"
//                     ry="6.433"
//                     fill="#ffffff"
//                   ></ellipse>
//                 </g>
//               </svg>
//             </div>
//             <div className="text-lg">
//               <p>Aalto University</p>
//               <p>P.O. Box 11000 (Otakaari 1B)</p>
//               <p>Fl-00076 AALTO</p>
//               <p> Switchboard: +358 9 47001</p>
//             </div>
//             <div>
//               <h1 className="text-white text-md">Follow Us:</h1>
//             </div>
//           </div>
//           <div className="col-span-2 grid grid-cols-2 content-start md:grid-cols-1">
//             {[
//               {
//                 title: "Quicklinks",
//                 desc: [
//                   "Research and artistic outputs",
//                   "Library — Learning Centre",
//                   "admissions",
//                   "alumni",
//                   "media",
//                   "it",
//                   "open",
//                   "aalto",
//                 ],
//               },
//               {
//                 title: "Quicklinks",
//                 desc: ["campusmaps", "contact-Information"],
//               },
//               {
//                 title: "Quicklinks",
//                 desc: ["news", "events", "oareers"],
//               },
//               {
//                 title: "Quicklinks",
//                 desc: [
//                   "for Students",
//                   "student guides",
//                   "webmail",
//                   "mycourses",
//                   "mystudies",
//                   "sisu",
//                 ],
//               },
//             ].map((value, index) => {
//               return (
//                 <div key={index} className={`flex flex-col `}>
//                   <h1 className="text-xl">{value.title}</h1>
//                   {value.desc.map((v, e) => {
//                     return (
//                       <h1 key={e} className="underline capitalize">
//                         {v}
//                       </h1>
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>

//           <div className="text-white space-y-5">
//             <h1 className="text-3xl">Together towards a better world.</h1>
//             <p>
//               Support new ideas, research, work and leadership development
//               towards a stronger Finland.
//             </p>
//             <button className="border bg-[#FFFFFF] border-white py-2 px-10 rounded-full text-gray-800 ">
//               See all Aalto University news
//             </button>
//           </div>
//         </div>
//         <div className="border-t-2 border-white py-6 text-white flex justify-between flex-wrap md:flex-col mt-4">
//           <div className="flex gap-4">
//             {["privacy", "cookie", "feedback", "accessibility", "cookie"].map(
//               (item, i) => {
//                 return (
//                   <h1
//                     className="capitalize  underline
//                   "
//                     key={i}
//                   >
//                     {item}
//                   </h1>
//                 );
//               }
//             )}
//           </div>
//           <div className="flex gap-4">
//             {["suomeksi", "svenska", "english"].map((item, i) => {
//               return (
//                 <h1
//                   className="capitalize underline
//                   "
//                   key={i}
//                 >
//                   {item}
//                 </h1>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "../components/ui/Button";

const Footer = () => {
  return (
    <div className="border-t bg-gray1 text-white md:px-32 px-5 py-10 relative z-30">
      <div className=" md:grid space-y-5 md:space-y-0 grid-cols-4 pb-10 ">
        <div>
          <Link href={"/"} className="inline-flex pb-10">
            <Image alt="" src={logo} className="w-32" />
          </Link>
          <p>Aalto University</p>
          <p> P.O. Box 11000 (Otakaari 1B)</p>
          <p> FI-00076 AALTO</p>
          <p> Switchboard: +358 9 47001</p>

          <div className="pt-5">
            <h2>Follow us:</h2>
            <div className="flex gap-2">
              <Link href={"/"}>
                <FaFacebookF className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaTwitter className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaFacebookF className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaTwitter className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl">Quicklinks</h2>
          <div className="pt-3 space-y-1">
            {[
              "Research and artistic outputs",
              "Library – Learning Centre",
              "Admissions",
              "Alumni",
              "Media",
              "IT services",
              "Open University",
              "Aalto University Shop",
            ].map((item) => {
              return (
                <Link
                  key={item}
                  href="/"
                  className="block text-sm w-fit underline hover:bg-neutral-700"
                >
                  {" "}
                  {item}
                </Link>
              );
            })}
          </div>
          <h2 className="text-xl pt-7">Latest</h2>
          <div className="pt-3 space-y-1">
            {["News", "Events", "Careers"].map((item) => {
              return (
                <Link
                  key={item}
                  href="/"
                  className="block text-sm w-fit underline hover:bg-neutral-700"
                >
                  {" "}
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-xl">Contact</h2>
          <div className="pt-3 space-y-1">
            {["Campus maps", "Contact information"].map((item) => {
              return (
                <Link
                  key={item}
                  href="/"
                  className="block text-sm w-fit underline hover:bg-neutral-700"
                >
                  {" "}
                  {item}
                </Link>
              );
            })}
          </div>
          <h2 className="text-xl pt-7">For students</h2>
          <div className="pt-3 space-y-1">
            {["Student Guide", "Webmail", "MyCourses", "MyStudies", "Sisu"].map(
              (item) => {
                return (
                  <Link
                    key={item}
                    href="/"
                    className="block text-sm w-fit underline hover:bg-neutral-700"
                  >
                    {" "}
                    {item}
                  </Link>
                );
              }
            )}
          </div>
        </div>
        <div className="space-y-7 border-t md:border-none pt-5 md:pt-0">
          <h2 className="text-2xl">Together towards a better world.</h2>
          <p>
            Support new ideas, research, work and leadership development towards
            a stronger Finland.
          </p>
          <Button
            name={"Donate to Aalto University"}
            link="/"
            className={"bg-white inline-flex text-black "}
          />
        </div>
      </div>
      <div className="border-t md:flex pt-5">
        <div className="md:flex gap-5 space-y-3 md:space-y-0">
          {[
            "Privacy notice",
            "Cookie policy",
            "Feedback",
            "Accessibility statement",
            "Cookie settings",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              className="block text-sm w-fit underline hover:bg-neutral-700"
            >
              {" "}
              {item}
            </Link>
          ))}
        </div>
        <div className="md:ml-auto mt-10 md:mt-0 md:flex gap-5 space-y-3 md:space-y-0">
          {["Suomeksi", "Svenska", "English"].map((item, index) => (
            <Link
              key={item}
              href="/"
              className={`block text-sm w-fit underline ${
                index == 2 && "no-underline"
              } hover:bg-neutral-700`}
            >
              {" "}
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
