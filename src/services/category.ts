import categories from "./categories.json";
import { Category } from "./types";

export const getCategoryById = async (
  categoryId: string
): Promise<Category> => {
  return categories.find((category) => category.id === categoryId);
};

export const getRootCategories = async (): Promise<Category[]> => {
  return categories.filter((category) => !category.parentId);
};

export const getSubCategories = async (
  categoryParentId: string
): Promise<Category[]> => {
  return categories.filter(
    (category) => category.parentId === categoryParentId
  );
};
