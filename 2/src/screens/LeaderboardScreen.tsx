import { useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCardStore } from "../store/useCardStore";
import { colors } from "../constants/theme";
import { LEVEL_GLOW_COLORS } from "../constants/levels";
import { getLevelProgress } from "../utils/xpCalculator";

export function LeaderboardScreen() {
  const { developers, currentUserId } = useCardStore();
  const navigation = useNavigation<any>();
  const [period, setPeriod] = useState<"weekly" | "alltime">("alltime");

  const sorted = [...developers].sort((a, b) => b.xp - a.xp);
  const rest = sorted.slice(3);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Leaderboard</Text>
          <Text style={styles.subtitle}>Top developers by XP</Text>

          <View style={styles.toggleContainer}>
            {["alltime", "weekly"].map((p: any) => (
              <Pressable
                key={p}
                onPress={() => setPeriod(p)}
                style={[styles.toggleButton, period === p ? styles.toggleActive : null]}
              >
                <Text style={[styles.toggleText, period === p ? styles.toggleTextActive : null]}>
                  {p === "alltime" ? "All Time" : "Weekly"}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.list}>
          {sorted.map((dev, i) => {
            const rank = i + 1;
            const isCurrentUser = dev.id === currentUserId;
            const glowColor = LEVEL_GLOW_COLORS[dev.level];
            const progress = getLevelProgress(dev.xp);

            return (
              <Pressable
                key={dev.id}
                onPress={() => navigation.navigate("DevCard", { id: dev.id })}
                style={[
                  styles.rankItem,
                  isCurrentUser ? styles.rankItemSelf : null,
                  { borderColor: isCurrentUser ? colors.accent : colors.border }
                ]}
              >
                <Text style={styles.rankNumber}>#{rank}</Text>
                <View style={[styles.avatar, { backgroundColor: `${glowColor}22`, borderColor: glowColor }]}>
                  <Text style={styles.avatarText}>{dev.avatar}</Text>
                </View>
                <View style={styles.info}>
                  <View style={styles.nameRow}>
                    <Text style={[styles.name, isCurrentUser ? { color: colors.accent } : null]} numberOfLines={1}>
                      {dev.name} {isCurrentUser ? "(you)" : ""}
                    </Text>
                    <Text style={styles.xp}>{dev.xp.toLocaleString()} XP</Text>
                  </View>
                  <View style={styles.progressContainer}>
                    <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: glowColor }]} />
                  </View>
                </View>
              </Pressable>
            );
          })}
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
  },
  subtitle: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 3,
    alignSelf: "flex-start",
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 10,
  },
  toggleActive: {
    backgroundColor: colors.accent,
  },
  toggleText: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "700",
  },
  toggleTextActive: {
    color: "#FFF",
  },
  list: {
    padding: 20,
    paddingBottom: 40,
  },
  rankItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 14,
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    marginBottom: 8,
  },
  rankItemSelf: {
    backgroundColor: `${colors.accent}18`,
  },
  rankNumber: {
    width: 32,
    fontSize: 13,
    fontWeight: "700",
    color: colors.textSecondary,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
  },
  info: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  name: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textPrimary,
    flex: 1,
  },
  xp: {
    fontSize: 11,
    color: colors.xp,
    marginLeft: 8,
  },
  progressContainer: {
    height: 3,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 100,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 100,
  },
});
