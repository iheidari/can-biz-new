import React from "react";
import Button from "./Button";
import { getSubCategories } from "@/services/category";
import { Category } from "@/services/types";

interface Props {
  category: Category;
}

const Filters = async (props: Props) => {
  const rootCategoryId = props.category.parentId
    ? props.category.parentId
    : props.category.id;

  const subCategories = await getSubCategories(rootCategoryId);
  if (subCategories.length === 0) {
    return null;
  }
  const filters = subCategories.map((item) => (
    <Button
      key={item.id}
      url={`/${rootCategoryId}/${item.id}`}
      title={item.name}
      isActive={item.id === props.category.id}
    />
  ));

  return <div className="flex flex-wrap gap-6">{filters}</div>;
};

export default Filters;
