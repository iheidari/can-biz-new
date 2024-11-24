import { getBusinessesByCategoryId } from "@/services/business";
import { Business, Category } from "@/services/types";
import React from "react";
import Thumb from "./Thumb";

interface Props {
  category: Category;
}

const renderBusinesses = (businesses: Business[]) => {
  return businesses.map((business) => (
    <Thumb
      key={business.id}
      link={`/business/${business.id}`}
      title={business.name}
      imageSrc=""
      leftValue={`followers: ${business.socialMedia.instagram.followers.toString()}`}
    />
  ));
};

const List = async (props: Props) => {
  const businesses = await getBusinessesByCategoryId(props.category.id);
  return (
    <div className="p-8 flex justify-center">
      {renderBusinesses(businesses)}
    </div>
  );
};

export default List;
