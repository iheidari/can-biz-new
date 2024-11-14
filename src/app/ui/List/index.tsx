import React from "react";

type Props = { category: string };

const List = (props: Props) => {
  const list = getItemsByCategory(props.category);
  return <div>List</div>;
};

export default List;
