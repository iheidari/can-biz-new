import React from "react";
import Thumb from "./Thumb";

const Categories = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 content-center pt-8">
      <Thumb title="Art" slug="/art" />
      <Thumb title="Health Care" slug="/health-care" small />
      <Thumb title="Lawyer" slug="/lawyer" />
    </div>
  );
};

export default Categories;
