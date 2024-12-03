import React from "react";
import Thumb from "./Thumb";
import { getRootCategories } from "@/services/category";

const Categories = async () => {
  const rootCategories = await getRootCategories();
  return (
    <div className="flex flex-row flex-wrap gap-4 content-center pt-8">
      {rootCategories.map((category) => (
        <Thumb
          key={category.id}
          id={category.id}
          title={category.name}
          slug={`/${category.id}`}
          small={category.name.length > 10}
        />
      ))}
    </div>
  );
};

export default Categories;