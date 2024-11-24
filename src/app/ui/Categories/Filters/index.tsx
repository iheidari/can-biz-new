import React from "react";
import Button from "./Button";
import { getSubCategories } from "@/services/category";

interface Props {
  categoryId: string;
}

const Filters = async (props: Props) => {
  const subCategories = await getSubCategories(props.categoryId);
  if (subCategories.length === 0) {
    return null;
  }

  const allButton = (
    <Button key="all" url={`${props.categoryId}`} title="All" isActive />
  );

  const filters = subCategories.map((item) => (
    <Button
      key={item.id}
      url={`${props.categoryId}/${item.id}`}
      title={item.name}
      isActive={false} // Set `true` for the active button
    />
  ));
  const allFilters = [allButton, ...filters];

  return <div className="flex flex-wrap gap-6">{allFilters}</div>;
};

export default Filters;
