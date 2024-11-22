import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  title: string;
  isActive?: boolean;
}

const Button = (props: Props) => {
  return (
    <Link
      href={props.url}
      className={`px-4 py-2 rounded-full border-2 text-center ${
        props.isActive
          ? "bg-white text-black border-white"
          : "bg-transparent text-white border-white"
      } hover:bg-white hover:text-black transition duration-300`}
    >
      {props.title}
    </Link>
  );
};

export default Button;
