import { useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { useCardStore } from "../store/useCardStore";
import { colors } from "../constants/theme";

export function AchievementsScreen() {
  const { developers, currentUserId } = useCardStore();
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress">("all");

  const currentDev = developers.find((d) => d.id === currentUserId) ?? developers[0];
  if (!currentDev) return null;

  const achievements = currentDev.achievements;
  const completed = achievements.filter((a) => a.isCompleted).length;
  const totalXP = achievements.filter((a) => a.isCompleted).reduce((sum, a) => sum + a.xpReward, 0);

  const filtered = achievements.filter((a) => {
    if (filter === "completed") return a.isCompleted;
    if (filter === "in-progress") return !a.isCompleted && a.progress > 0;
    return true;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Achievements</Text>

          <View style={styles.statsRow}>
            <View>
              <Text style={styles.statValue}>{completed}/{achievements.length}</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
            <View>
              <Text style={[styles.statValue, { color: colors.xp }]}>{totalXP}</Text>
              <Text style={styles.statLabel}>XP Earned</Text>
            </View>
            <View>
              <Text style={[styles.statValue, { color: colors.accent }]}>
                {Math.round((completed / achievements.length) * 100)}%
              </Text>
              <Text style={styles.statLabel}>Progress</Text>
            </View>
          </View>

          <View style={styles.filterRow}>
            {(["all", "completed", "in-progress"] as const).map((f) => (
              <Pressable
                key={f}
                onPress={() => setFilter(f)}
                style={[styles.filterChip, filter === f ? styles.filterActive : null]}
              >
                <Text style={[styles.filterText, filter === f ? styles.filterTextActive : null]}>
                  {f}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.grid}>
          {filtered.map((ach) => (
            <View
              key={ach.id}
              style={[
                styles.card,
                { borderColor: ach.isCompleted ? colors.success : colors.border }
              ]}
            >
              <View style={[styles.iconBox, { backgroundColor: ach.isCompleted ? `${colors.success}22` : "rgba(255,255,255,0.04)" }]}>
                <Text style={[styles.icon, { opacity: ach.isCompleted ? 1 : 0.4 }]}>{ach.icon}</Text>
              </View>
              <Text style={[styles.cardTitle, { color: ach.isCompleted ? colors.textPrimary : colors.textSecondary }]}>
                {ach.title}
              </Text>
              <Text style={styles.cardDesc} numberOfLines={2}>{ach.description}</Text>
              <View style={styles.progressBox}>
                <View style={[styles.progressBar, { width: `${ach.progress}%`, backgroundColor: ach.isCompleted ? colors.success : colors.accent }]} />
              </View>
              <Text style={styles.xpReward}>+{ach.xpReward} XP</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: colors.surfaceElevated,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 16,
  },
  statValue: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  statLabel: {
    fontSize: 10,
    color: colors.textSecondary,
    textTransform: "uppercase",
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterActive: {
    borderColor: colors.accent,
    backgroundColor: `${colors.accent}22`,
  },
  filterText: {
    color: colors.textSecondary,
    fontSize: 11,
    textTransform: "capitalize",
  },
  filterTextActive: {
    color: colors.accent,
    fontWeight: "700",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 14,
    gap: 12,
  },
  card: {
    width: "48%",
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  icon: {
    fontSize: 28,
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 10,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 14,
    marginBottom: 8,
  },
  progressBox: {
    width: "100%",
    height: 4,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 100,
    marginBottom: 8,
  },
  progressBar: {
    height: "100%",
    borderRadius: 100,
  },
  xpReward: {
    fontSize: 10,
    color: colors.xp,
  },
});
