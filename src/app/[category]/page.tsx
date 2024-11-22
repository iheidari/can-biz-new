import React from "react";
import Breadcrumb from "../ui/Breadcrumb";
import List from "../ui/Categories/List";
import { getCategoryById, getRootCategories } from "@/services/category";
import Filters from "../ui/Categories/Filters";

interface IProps {
  params: { category: string };
}

const page = async ({ params }: IProps) => {
  const { category: categoryId } = await params;
  const category = await getCategoryById(categoryId);

  if (!category) {
    return { notFound: true };
  }

  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: category.name, url: `/${category.id}` },
  ];

  return (
    <div>
      <Breadcrumb data={breadcrumbs} />
      <h1>{category.name}</h1>
      <Filters categoryId={category.id} />
      <List category={category} />
    </div>
  );
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await getRootCategories();
  const paths = categories.map((category) => ({ category: category.id }));
  return paths;
}

export default page;
