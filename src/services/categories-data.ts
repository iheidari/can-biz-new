import { Category } from "./types";

export const categories: Category[] = [
  {
    id: "fast-food",
    name: "Fast food",
  },
  {
    id: "hookah-lounge",
    name: "Hookah lounge",
  },
  {
    id: "decoration-eventplanner",
    name: "Decoration & Event planner",
  },
  {
    id: "event-planner",
    name: "Event Planner",
    parentId: "decoration-eventplanner",
  },
  {
    id: "rental-decoration",
    name: "Rental Decoration",
    parentId: "decoration-eventplanner",
  },
  {
    id: "florist",
    name: "Florist",
    parentId: "decoration-eventplanner",
  },
];
