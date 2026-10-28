import { dataServices } from "../../../data/data";
import { TbCompass, TbTargetArrow } from "react-icons/tb";
import {
  PiChartLineUp,
  PiGraduationCap,
  PiUsersThree,
} from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

// Dashboard services store an icon key, not a component, so the value can
// be saved. The public page keeps using the components themselves.
export const SERVICE_ICONS = {
  compass: TbCompass,
  users: PiUsersThree,
  settings: IoSettingsOutline,
  chart: PiChartLineUp,
  target: TbTargetArrow,
  graduation: PiGraduationCap,
};

export const SERVICE_ICON_OPTIONS = [
  { key: "compass", label: "Compass" },
  { key: "users", label: "Users" },
  { key: "settings", label: "Settings" },
  { key: "chart", label: "Chart" },
  { key: "target", label: "Target" },
  { key: "graduation", label: "Graduation" },
];

const ICON_KEY_BY_COMPONENT = new Map(
  Object.entries(SERVICE_ICONS).map(([key, component]) => [component, key]),
);

export const publicServices = dataServices.map((item) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  items: [...item.itemService],
  iconKey: ICON_KEY_BY_COMPONENT.get(item.icon) || "compass",
  isPublic: true,
}));
