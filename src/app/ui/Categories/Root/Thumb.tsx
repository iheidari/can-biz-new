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
      className="w-32 h-32 border-2 bg-white border-white flex flex-col items-center justify-between p-2 transition-all duration-300 hover:w-36 hover:h-36 hover:border-red-500 hover:border-4"
    >
      <Image
        src={`/icons/${props.id}.png`}
        height={64}
        width={64}
        alt={props.title}
      />
      <div
        className={`text-center ${
          props.small ? "text-l" : "text-2xl"
        } text-black truncate overflow-hidden whitespace-nowrap w-full`}
      >
        {props.title}
      </div>
    </Link>
  );
};

export default Thumb;
