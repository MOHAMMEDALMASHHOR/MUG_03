export type Specialization = "Mobile" | "Backend" | "AI/ML" | "DevOps" | "Frontend";
export type DeveloperLevel = "Junior" | "Mid" | "Senior" | "Lead" | "Principal" | "Legendary";
export type BadgeRarity = "common" | "rare" | "epic" | "legendary";

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: BadgeRarity;
  unlockedAt?: Date;
  isUnlocked: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  isCompleted: boolean;
  xpReward: number;
  completedAt?: Date;
}

export interface Endorsement {
  id: string;
  from: string;
  skill: string;
  createdAt: Date;
}

export interface Developer {
  id: string;
  name: string;
  title: string;
  specialization: Specialization;
  level: DeveloperLevel;
  xp: number;
  xpToNextLevel: number;
  isAvailable: boolean;
  avatar: string;
  badges: Badge[];
  achievements: Achievement[];
  hireCount: number;
  endorsements: Endorsement[];
  streak: number;
  joinedAt: Date;
  techStack: string[];
  rank: number;
}
