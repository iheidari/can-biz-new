import { Business } from "./types";
import data from "./businesses-data.json";

export const businesses: Business[] = data.map((business) => ({
  ...business,
  createdAt: new Date(),
  updatedAt: new Date(),
  socialMedia: {
    ...business.socialMedia,
    instagram: {
      ...business.socialMedia.instagram,
      followers: Number(business.socialMedia.instagram.followers), // Convert followers to number
    },
  },
}));
