import Image from "next/image";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import explore from "/public/explore.jpg";
import pencil from "../../public/pencil.webp";
import school from "../../public/school.webp";
import campus from "../../public/campus.webp";
import campus2 from "../../public/campus2.webp";
import blog from "../../public/blog.webp";
import right from "../../public/right.svg";
import voice from "../../public/voice.jpg";
import Aalto from "../../public/Aalto-vision.jpeg";
import UniversityStudents from "../../public/university-students.jpeg";
import model from "../../public/model.jpeg";
import garden from "../../public/garden-plot.jpeg";
import forest from "../../public/forest.jpeg";


export default function Explore() {
  const data = [
    {
      img: pencil,
      text: "For personnel",
    },
    {
      img: pencil,
      text: "Aalto Handbook",
    },
    {
      img: pencil,
      text: "Safety",
    },
  ];
  const schools = [
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
  ];
  const campuses = [
    {
      img: campus,
      title: "Campus - lively and thriving",
      text: "Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together.",
      links: [
        "Explore our vibrant innovation ecosystem",
        "Explore our campus",
        "Book a space",
      ],
      aspect: "aspect-[4/3]",
    },
    {
      img: campus2,
      title: "Campus - lively and thriving",
      text: "Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together.",
      links: [
        "Explore our vibrant innovation ecosystem",
        "Explore our campus",
        "Book a space",
      ],
      reverse: true,
      aspect: "aspect-[690/431]",
    },
  ];
  const blogs = [
    {
      img: blog,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      img: Aalto,
      text: "Creative sustainability. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      img: UniversityStudents,
      text: "Architectural gems of Otaniemi. Photo: Aalto University / Tuomas Uusheimo.",
    },
    {
      img: model,
      text: "Trail to the Laajalahti Nature Reserve and one of South Finland's best birdwatching bay. Photo: Aalto University.",
    },
    {
      img: Aalto,
      text: "Developing a connected campus. Photo: Aalto University / Jaakko Kahilaniemi.",
    },
    {
      img: UniversityStudents,
      text: "Developing a connected campus. Photo: Aalto University / Jaakko Kahilaniemi.",
    },
    {
      img: garden,
      text: "One of the most international universities in Europe. Photo: Aalto Design Factory / Bijan Mokhtari.",
    },
    {
      img: forest,
      text: "Educating future thought-leaders. Photo: Aalto Vision Forum / Lasse Lecklin.",
    },
  ];
  const voices = [
    {
      img: voice,
      text: "Watch our videos",
    },
    {
      img: voice,
      text: "Watch our videos",
    },
    {
      img: voice,
      text: "Watch our videos",
    },
  ];
  return (
    <div className="pt-14 pb-[72px] bg-[#2D2D2D]">
      <div className="relative">
        <Image className="w-full h-[400px]" alt="" src={explore} />
        <div className="absolute z-10 inset-x-0 bottom-0">
          <Wrapper>
            <h2 className="text-[30px] leading-[36px] sm:text-[56px] sm:leading-[66px] bg-yellow-400 pt-6 px-6 md:px-10 md:pt-10 pb-20 border-b border-b-white text-white md:text-[75px] font-bold md:leading-[88px]">
              Explore Aalto University
            </h2>
          </Wrapper>
        </div>
      </div>
      <Wrapper>
        <div className="bg-white border-b md:flex">
          {["Study at Aalto", "Open position", "Contact us"].map((el, i) => {
            return (
              <div
                key={i}
                className={`flex items-center justify-center p-6 md:h-[112px] md:px-6 md:py-2 md:flex-1 ${
                  i < 2 &&
                  "md:border-r md:border-r-white border-b border-b-white md:border-b-0 md:border-b-transparent"
                }`}
              >
                <Link
                  href={"/"}
                  className="heading underline hover:bg-white hover:text-black"
                >
                  {el}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-[72px] mb-14 text-white">
          <h2 className="mb-4 font-medium text-center text-white">
            Important quicklinks
          </h2>
          <div className="flex flex-col gap-4 sm:gap-0 justify-center sm:flex-row sm:justify-between">
            {[
              data.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="w-[258px] mx-auto sm:mx-0 sm:w-auto flex-1 flex justify-center"
                  >
                    <div className="w-full sm:w-auto flex gap-2 sm:gap-0 sm:flex-col md:flex-row md:gap-2 items-center">
                      <Image
                        src={el.img}
                        alt=""
                        className="w-[88px] h-[88px] rounded-full"
                      />
                      <span className="text--md">{el.text}</span>
                    </div>
                  </div>
                );
              }),
            ]}
          </div>
        </div>
        <div className="mb-[72px] text-white">
          <h2 className="heading mb-4 h-[66px] sm:h-auto">
            Explore our six schools
          </h2>
          <p className="text mb-6">
            Scientific research and artistic activities are carried out at six
            schools and their departments and units.
          </p>
          <div className="gap-y-2 sm:gap-y-6 gap-x-4 grid md:grid-cols-2">
            {schools.map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex h-[82px] sm:h-[120px] md:h-40 border border-white"
                >
                  <div className="flex-1  flex flex-col justify-end px-3 sm:px-6 pt-3 sm:pt-6 pb-2 sm:pb-4">
                    <h3 className="text--md mb-2 max-h-[50px] overflow-hidden">
                      {el.title}
                    </h3>
                    <div className="overflow-hidden w-full h-[25px] hidden sm:block">
                      <p className="text--sm overflow-hidden h-[25px]">
                        {el.text}
                      </p>
                    </div>
                  </div>
                  <div className="w-[82px] h-[82px] sm:w-[120px] sm:h-[120px] md:w-40 md:h-40 relative">
                    <Image src={el.img} alt="" fill className="object-cover" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-14 mb-14 text-white">
          {campuses.map((el, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col ${
                  el.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div
                  className={`relative mb-8 md:mb-0 aspect-[4/3]- ${el.aspect} md:w-1/2`}
                >
                  <Image src={el.img} alt="" className="object-cover" fill />
                </div>
                <div className="flex-1">
                  <div
                    className={`${
                      el.reverse ? "md:pr-14" : "md:pl-14"
                    } md:py-16 pb-16`}
                  >
                    <h2 className="heading mb-4">{el.title}</h2>
                    <p className="text mb-6">{el.text}</p>
                    <div>
                      {el.links.map((el, i) => {
                        return (
                          <Link
                            href="/"
                            key={i}
                            className="flex text items-center gap-2.5 mb-4"
                          >
                            <Image
                              src={right}
                              alt=""
                              className="text w-5 h-5"
                            />
                            <span className="underline">{el}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap content-start mb-14 text-white">
          {blogs.map((el, i) => {
            return (
              <div
                key={i}
                className="px-1 pb-2 w-1/2 sm:w-[33.333333%] xl:w-1/4 h-min"
              >
                <div className="relative aspect-[251/167]">
                  <Image src={el.img} alt="" fill />
                </div>
                <p className="text--sm pt-1 mb-1">{el.text}</p>
              </div>
            );
          })}
        </div>
        <div className="text-white">
          <h2 className="heading text-center mb-4">Community voices</h2>
          <div className="flex flex-col sm:flex-row gap-4 sm;gap-10 items-center">
            {voices.map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex sm:flex-col sm:justify-center sm:flex-1 md:flex-row items-center gap-2"
                >
                  <Image
                    src={el.img}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="text">{el.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
