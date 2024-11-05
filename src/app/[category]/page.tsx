import React from "react";

interface IProps {
  params: { category: string };
}

const page = async ({ params }: IProps) => {
  const { category } = await params;
  console.log("🚀 ~ page ~ params.category:", category);
  return <div>{category}</div>;
};

export default page;
