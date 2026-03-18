import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LevelUpEvent {
  id: string;
  newLevel: string;
  devName: string;
}

interface GameStore {
  totalXPEarned: number;
  lastLoginDate: string | null;
  loginStreak: number;
  pendingLevelUp: LevelUpEvent | null;
  newlyCompletedAchievements: string[];
  addXP: (amount: number) => void;
  checkDailyLogin: () => number;
  triggerLevelUp: (event: LevelUpEvent) => void;
  dismissLevelUp: () => void;
  addCompletedAchievement: (id: string) => void;
  clearCompletedAchievements: () => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      totalXPEarned: 0,
      lastLoginDate: null,
      loginStreak: 1,
      pendingLevelUp: null,
      newlyCompletedAchievements: [],

      addXP: (amount) =>
        set((state) => ({ totalXPEarned: state.totalXPEarned + amount })),

      checkDailyLogin: () => {
        const today = new Date().toDateString();
        const state = get();
        if (state.lastLoginDate === today) return 0;

        const yesterday = new Date(Date.now() - 86400000).toDateString();
        const streak = state.lastLoginDate === yesterday ? state.loginStreak + 1 : 1;
        const xpGain = 10 * (streak >= 7 ? 2 : 1);

        set({ lastLoginDate: today, loginStreak: streak });
        return xpGain;
      },

      triggerLevelUp: (event) => set({ pendingLevelUp: event }),
      dismissLevelUp: () => set({ pendingLevelUp: null }),

      addCompletedAchievement: (id) =>
        set((state) => ({
          newlyCompletedAchievements: [...state.newlyCompletedAchievements, id],
        })),

      clearCompletedAchievements: () => set({ newlyCompletedAchievements: [] }),
    }),
    { name: "devcard-arena-game" }
  )
);
