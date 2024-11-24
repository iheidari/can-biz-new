import React from "react";
import Breadcrumb from "../ui/Breadcrumb";
import List from "../ui/Categories/List";
import {
  getCategoryById,
  getRootCategories,
  getSubCategories,
} from "@/services/category";
import Filters from "../ui/Categories/Filters";
import { notFound } from "next/navigation";

interface IProps {
  params: { categories: string[] };
}

const page = async ({ params }: IProps) => {
  const { categories: categoriesId } = await params;

  if (!Array.isArray(categoriesId) || categoriesId.length === 0) {
    return notFound();
  }

  const categories = categoriesId
    .map((categoryId) => getCategoryById(categoryId))
    .filter((category) => category !== undefined);

  if (categories.some((category) => !category)) {
    return notFound();
  }

  const breadcrumbs = [{ title: "Home", url: "/" }];

  let url = "";
  for (let i = 0; i < categories.length; i++) {
    url += `/${categories[i].id}`;
    breadcrumbs.push({
      title: categories[i].name,
      url,
    });
  }

  return (
    <div>
      <Breadcrumb data={breadcrumbs} />
      <h1>{categories[categories.length - 1].name}</h1>
      <Filters category={categories[categories.length - 1]} />
      <List category={categories[categories.length - 1]} />
    </div>
  );
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = await getRootCategories();
  const paths = [];

  for (const category of categories) {
    paths.push({ categories: [category.id] });
    const subcategories = await getSubCategories(category.id);
    for (const subcategory of subcategories) {
      paths.push({ categories: [category.id, subcategory.id] });
    }
  }
  return paths;
}

export default page;
