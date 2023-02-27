import Image from "next/image";
import Link from "next/link";

const Card1 = ({ image, title, paragraph, date, cat, className }) => {
  return (
    <Link
      href={"/"}
      className={`block group  ${className} w-[432px] h-[368px] text-white bg-yellow-60000`}
    >
      <div>
        <Image
          alt=""
          src={image}
          className="group-hover:opacity-70 duration-300"
        />
      </div>
      <div className="space-y-7 px-5 pt-5">
        <h2 className="group-hover:bg-[#e3e3e3] duration-300 w-fit text-lg font-semibold">
          {title}
        </h2>
        <p>{paragraph}</p>
        <h5 className="text-sm">
          {date} | {cat}
        </h5>
      </div>
    </Link>
  );
};

export default Card1;
