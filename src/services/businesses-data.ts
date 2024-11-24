import { Business } from "./types";

export const businesses: Business[] = [
  {
    id: "iman-florist",
    name: "Iman Florist",
    socialMedia: {
      instagram: {
        id: "",
        name: "",
        followers: 0,
        posts: 0,
        businessFollowers: 0,
      },
    },
    category: {
      id: "florist",
      name: "Florist",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    serviceLocations: [],
    tags: [],
  },
];
