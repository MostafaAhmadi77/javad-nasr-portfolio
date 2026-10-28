import { casestudiesTable } from "../../../data/caseStudiesData";
import img3 from "../../../assets/Images/mainimg/m1/img3.webp";
import img4 from "../../../assets/Images/mainimg/m1/img4.webp";
import img5 from "../../../assets/Images/mainimg/m1/img5.webp";
import growth from "../../../assets/Images/growth-chart-1400x1100.jpg";
import manuf from "../../../assets/Images/manufacturing-dashboard-1400x1100.jpg";

// Dashboard cases store an image key for the site's own pictures, or a
// data URL for a newly uploaded picture, so the value can be saved.
// Bundled picture URLs change on every build, so they are never persisted.
export const CASE_IMAGES = { img3, img4, img5, growth, manuf };

const IMAGE_KEY_BY_SRC = new Map(
  Object.entries(CASE_IMAGES).map(([key, src]) => [src, key]),
);

export const publicCaseStudies = casestudiesTable.map((item) => ({
  id: item.id,
  category: item.shortTitle,
  title: item.longTitle,
  description: item.description,
  industry: item.type,
  region: item.loc,
  stats: [
    { num: item.firstNum, label: item.firstTitle },
    { num: item.secoundNum, label: item.secoundTitle },
    { num: item.thirdNum, label: item.thirdTitle },
  ],
  imgKey: IMAGE_KEY_BY_SRC.get(item.img) || null,
  img: null,
  isPublic: true,
}));

export function caseImage(item) {
  if (!item) return null;
  if (item.img) return item.img;
  if (item.imgKey && CASE_IMAGES[item.imgKey]) return CASE_IMAGES[item.imgKey];
  return null;
}
