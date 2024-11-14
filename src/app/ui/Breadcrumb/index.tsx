import Link from "next/link";
import React from "react";

export interface Item {
  title: string;
  url: string;
}
interface Props {
  data: Item[];
}

const Breadcrumb = (props: Props) => {
  return (
    <ol className="flex space-x-2">
      {props.data.map((item, index) => (
        <li key={index} className="flex items-center">
          <Link href={item.url}>
            <span className=" hover:underline">{item.title}</span>
          </Link>
          {index < props.data.length - 1 && (
            <span className="mx-2 text-gray-500">/</span>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumb;
