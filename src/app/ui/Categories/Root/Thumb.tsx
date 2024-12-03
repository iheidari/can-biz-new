import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Props {
  id: string;
  title: string;
  slug: string;
  small?: boolean;
}

const Thumb = (props: Props) => {
  return (
    <Link
      href={props.slug}
      className="w-36 h-36 border-2 bg-white border-white flex flex-col items-center justify-between p-2 transition-all duration-300 hover:border-red-500 hover:border-4"
    >
      <Image
        src={`/icons/${props.id}.png`}
        height={64}
        width={64}
        alt={props.title}
      />
      <div
        className={`text-center text-black  w-full 
          ${props.small ? "text-l" : "text-2xl"} `}
      >
        {props.title}
      </div>
    </Link>
  );
};

export default Thumb;
