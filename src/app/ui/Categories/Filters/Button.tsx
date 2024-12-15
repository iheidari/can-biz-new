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
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-transparent text-gray-300 border-gray-300"
      } hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300 ease-in-out`}
    >
      {props.imageUrl ? (
        <div className="bg-white w-8 h-8 rounded-2xl p-1">
          <Image
            src={props.imageUrl}
            height={32}
            width={32}
            alt={props.title}
          />
        </div>
      ) : null}
      {props.title}
    </Link>
  );
};

export default Button;
