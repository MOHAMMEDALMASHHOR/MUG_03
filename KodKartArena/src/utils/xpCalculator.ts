import { DeveloperLevel } from "../types";
import { LEVEL_THRESHOLDS, LEVEL_ORDER } from "../constants/levels";

export function getLevelFromXP(xp: number): DeveloperLevel {
  let level: DeveloperLevel = "Junior";
  for (const l of LEVEL_ORDER) {
    if (xp >= LEVEL_THRESHOLDS[l]) level = l;
  }
  return level;
}

export function getXPToNextLevel(xp: number): number {
  const level = getLevelFromXP(xp);
  const idx = LEVEL_ORDER.indexOf(level);
  if (idx >= LEVEL_ORDER.length - 1) return 0;
  const nextLevel = LEVEL_ORDER[idx + 1];
  return LEVEL_THRESHOLDS[nextLevel] - xp;
}

export function getLevelProgress(xp: number): number {
  const level = getLevelFromXP(xp);
  const idx = LEVEL_ORDER.indexOf(level);
  if (idx >= LEVEL_ORDER.length - 1) return 100;
  const nextLevel = LEVEL_ORDER[idx + 1];
  const currentThreshold = LEVEL_THRESHOLDS[level];
  const nextThreshold = LEVEL_THRESHOLDS[nextLevel];
  return ((xp - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
}
