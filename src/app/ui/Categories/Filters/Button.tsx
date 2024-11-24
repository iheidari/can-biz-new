import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  title: string;
  imageUrl?: string;
  isActive?: boolean;
}

const Button = (props: Props) => {
  return (
    <Link
      href={props.url}
      className={`px-4 py-2 flex gap-1 rounded-full border-2 text-center ${
        props.isActive
          ? "bg-white text-black border-white"
          : "bg-transparent text-white border-white"
      } hover:bg-white hover:text-black transition duration-300`}
    >
      {props.imageUrl ? (
        <div className="bg-white w-6 h-6 rounded-2xl p-1">
          <Image
            src={props.imageUrl}
            height={24}
            width={24}
            alt={props.title}
          />
        </div>
      ) : null}
      {props.title}
    </Link>
  );
};

export default Button;
