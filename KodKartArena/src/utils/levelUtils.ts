import { Developer } from "../types";
import { DEFAULT_ACHIEVEMENTS } from "../constants/achievements";
import { DEFAULT_BADGES } from "../constants/badges";

let idCounter = 100;

export function generateId(): string {
  return `dev_${Date.now()}_${idCounter++}`;
}

export function createDefaultDeveloper(overrides: Partial<Developer> = {}): Developer {
  return {
    id: generateId(),
    name: "Dev User",
    title: "Software Engineer",
    specialization: "Frontend",
    level: "Junior",
    xp: 0,
    xpToNextLevel: 500,
    isAvailable: true,
    avatar: "🧑‍💻",
    badges: [...DEFAULT_BADGES],
    achievements: [...DEFAULT_ACHIEVEMENTS],
    hireCount: 0,
    endorsements: [],
    streak: 1,
    joinedAt: new Date(),
    techStack: [],
    rank: 99,
    ...overrides,
  };
}

export function getAvatarFromName(name: string): string {
  const emojis = ["🧑‍💻", "👩‍💻", "🧑‍🔬", "👨‍💻", "🦸", "🦸‍♀️", "🧙", "🧙‍♀️"];
  const sum = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return emojis[sum % emojis.length];
}

export function formatJoinDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(date);
}

export function mockDevelopers(): Developer[] {
  const devs: Partial<Developer>[] = [
    {
      id: "dev_1",
      name: "Ayşe Kaya",
      title: "Senior React Native Dev",
      specialization: "Mobile",
      level: "Senior",
      xp: 2100,
      xpToNextLevel: 900,
      isAvailable: true,
      avatar: "👩‍💻",
      hireCount: 7,
      streak: 12,
      techStack: ["React Native", "TypeScript", "GraphQL", "Firebase"],
      rank: 1,
    },
    {
      id: "dev_2",
      name: "Marcus Chen",
      title: "AI/ML Engineer",
      specialization: "AI/ML",
      level: "Lead",
      xp: 4200,
      xpToNextLevel: 1800,
      isAvailable: false,
      avatar: "🧑‍🔬",
      hireCount: 15,
      streak: 30,
      techStack: ["Python", "TypeScript", "AWS", "Docker"],
      rank: 2,
    },
    {
      id: "dev_3",
      name: "Sofia Rossi",
      title: "Frontend Architect",
      specialization: "Frontend",
      level: "Principal",
      xp: 7800,
      xpToNextLevel: 2200,
      isAvailable: true,
      avatar: "🦸‍♀️",
      hireCount: 22,
      streak: 45,
      techStack: ["React", "TypeScript", "Vue", "GraphQL", "Node.js"],
      rank: 3,
    },
    {
      id: "dev_4",
      name: "Kwame Asante",
      title: "DevOps Lead",
      specialization: "DevOps",
      level: "Lead",
      xp: 3600,
      xpToNextLevel: 1400,
      isAvailable: true,
      avatar: "🧙",
      hireCount: 9,
      streak: 7,
      techStack: ["Kubernetes", "Docker", "Terraform", "AWS", "Linux"],
      rank: 4,
    },
    {
      id: "dev_5",
      name: "Priya Sharma",
      title: "Backend Engineer",
      specialization: "Backend",
      level: "Mid",
      xp: 900,
      xpToNextLevel: 600,
      isAvailable: true,
      avatar: "👩‍💻",
      hireCount: 3,
      streak: 5,
      techStack: ["Node.js", "PostgreSQL", "Redis", "Go"],
      rank: 5,
    },
    {
      id: "dev_6",
      name: "Alex Rivera",
      title: "Legendary Full-Stack",
      specialization: "Frontend",
      level: "Legendary",
      xp: 10000,
      xpToNextLevel: 0,
      isAvailable: false,
      avatar: "👑",
      hireCount: 50,
      streak: 100,
      techStack: ["React", "Node.js", "Python", "AWS", "TypeScript", "MongoDB"],
      rank: 0,
    },
  ];

  return devs.map((d) => ({
    ...createDefaultDeveloper(),
    ...d,
    badges: DEFAULT_BADGES.map((b, i) => ({
      ...b,
      isUnlocked: i < Math.floor((d.hireCount ?? 0) / 5),
      unlockedAt: i < Math.floor((d.hireCount ?? 0) / 5) ? new Date() : undefined,
    })),
    achievements: DEFAULT_ACHIEVEMENTS.map((a, i) => ({
      ...a,
      progress: Math.min(100, Math.floor(Math.random() * 110)),
      isCompleted: i < Math.floor((d.hireCount ?? 0) / 4),
      completedAt: i < Math.floor((d.hireCount ?? 0) / 4) ? new Date() : undefined,
    })),
  }));
}
