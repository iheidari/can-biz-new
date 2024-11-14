import React from "react";
import Breadcrumb from "../ui/Breadcrumb";
import List from "../ui/List";

interface IProps {
  params: { category: string };
}

const page = async ({ params }: IProps) => {
  const { category } = await params;

  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: category, url: `/${category}` },
  ];

  return (
    <div>
      <Breadcrumb data={breadcrumbs} />
      <List category={category} />
    </div>
  );
};

export default page;
