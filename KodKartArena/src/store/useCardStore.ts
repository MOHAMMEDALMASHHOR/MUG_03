import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Developer } from "../types";
import { mockDevelopers } from "../utils/levelUtils";
import { getLevelFromXP, getXPToNextLevel } from "../utils/xpCalculator";
import { LEVEL_ORDER } from "../constants/levels";

interface CardStore {
  developers: Developer[];
  currentUserId: string | null;
  addDeveloper: (dev: Developer) => void;
  updateDeveloper: (id: string, updates: Partial<Developer>) => void;
  hireDeveloper: (id: string) => { leveledUp: boolean; newLevel: string | null };
  setCurrentUser: (id: string) => void;
  reorderLeaderboard: () => void;
}

export const useCardStore = create<CardStore>()(
  persist(
    (set, get) => ({
      developers: mockDevelopers(),
      currentUserId: "dev_5",

      addDeveloper: (dev) =>
        set((state) => ({
          developers: [dev, ...state.developers],
        })),

      updateDeveloper: (id, updates) =>
        set((state) => ({
          developers: state.developers.map((d) =>
            d.id === id ? { ...d, ...updates } : d
          ),
        })),

      hireDeveloper: (id) => {
        const state = get();
        const dev = state.developers.find((d) => d.id === id);
        if (!dev) return { leveledUp: false, newLevel: null };

        const oldLevel = dev.level;
        const newXP = dev.xp + 50;
        const newLevel = getLevelFromXP(newXP);
        const leveledUp = LEVEL_ORDER.indexOf(newLevel) > LEVEL_ORDER.indexOf(oldLevel);

        const updatedAchievements = dev.achievements.map((a) => {
          if (a.id === "first_hire" && dev.hireCount === 0) {
            return { ...a, progress: 100, isCompleted: true, completedAt: new Date() };
          }
          if (a.id === "popular_pick") {
            const newProgress = Math.min(100, ((dev.hireCount + 1) / 10) * 100);
            return {
              ...a,
              progress: newProgress,
              isCompleted: newProgress >= 100,
              completedAt: newProgress >= 100 ? new Date() : a.completedAt,
            };
          }
          if (a.id === "elite_status" && (newLevel === "Senior" || LEVEL_ORDER.indexOf(newLevel) >= LEVEL_ORDER.indexOf("Senior"))) {
            return { ...a, progress: 100, isCompleted: true, completedAt: new Date() };
          }
          if (a.id === "legendary_dev" && newLevel === "Legendary") {
            return { ...a, progress: 100, isCompleted: true, completedAt: new Date() };
          }
          return a;
        });

        set((state) => ({
          developers: state.developers
            .map((d) =>
              d.id === id
                ? {
                    ...d,
                    xp: newXP,
                    level: newLevel,
                    xpToNextLevel: getXPToNextLevel(newXP),
                    hireCount: d.hireCount + 1,
                    isAvailable: false,
                    achievements: updatedAchievements,
                  }
                : d
            )
            .sort((a, b) => b.xp - a.xp)
            .map((d, i) => ({ ...d, rank: i + 1 })),
        }));

        return { leveledUp, newLevel: leveledUp ? newLevel : null };
      },

      setCurrentUser: (id) => set({ currentUserId: id }),

      reorderLeaderboard: () =>
        set((state) => ({
          developers: [...state.developers]
            .sort((a, b) => b.xp - a.xp)
            .map((d, i) => ({ ...d, rank: i + 1 })),
        })),
    }),
    { name: "devcard-arena-cards" }
  )
);
