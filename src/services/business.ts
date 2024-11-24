import { businesses } from "./businesses-data";
import { getSubCategories } from "./category";
import { Business } from "./types";

export const getBusinessesByCategoryId = async (
  categoryId: string
): Promise<Business[]> => {
  const categories = [categoryId];
  // add subcategories
  categories.push(...(await getSubCategories(categoryId)).map((c) => c.id));

  return businesses.filter((business) =>
    categories.includes(business.category.id)
  );
};
