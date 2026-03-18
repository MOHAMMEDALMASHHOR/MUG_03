import { DeveloperLevel } from "../types";

export const LEVEL_THRESHOLDS: Record<DeveloperLevel, number> = {
  Junior: 0,
  Mid: 500,
  Senior: 1500,
  Lead: 3000,
  Principal: 6000,
  Legendary: 10000,
};

export const LEVEL_ORDER: DeveloperLevel[] = [
  "Junior",
  "Mid",
  "Senior",
  "Lead",
  "Principal",
  "Legendary",
];

export const LEVEL_GLOW_COLORS: Record<DeveloperLevel, string> = {
  Junior: "#888888",
  Mid: "#00E676",
  Senior: "#4FC3F7",
  Lead: "#CE93D8",
  Principal: "#FFD700",
  Legendary: "rainbow",
};

export const LEVEL_GLOW_HEX: Record<DeveloperLevel, string[]> = {
  Junior: ["#888888"],
  Mid: ["#00E676"],
  Senior: ["#4FC3F7"],
  Lead: ["#CE93D8"],
  Principal: ["#FFD700"],
  Legendary: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#8B00FF"],
};
