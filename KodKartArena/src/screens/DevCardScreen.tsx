import { useState, useRef } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet, SafeAreaView, Platform } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useCardStore } from "../store/useCardStore";
import { useGameStore } from "../store/useGameStore";
import { colors, SPECIALIZATION_GRADIENTS, TECH_COLORS } from "../constants/theme";
import { XPBar } from "../components/DevCard/XPBar";
import { LevelBadge } from "../components/DevCard/LevelBadge";
import { DeveloperLevel } from "../types";
import { formatJoinDate } from "../utils/levelUtils";
import { getLevelProgress } from "../utils/xpCalculator";

export function DevCardScreen() {
  const route = useRoute<any>();
  const { id } = route.params;
  const navigation = useNavigation<any>();
  const { developers, hireDeveloper } = useCardStore();
  const { triggerLevelUp, pendingLevelUp, dismissLevelUp } = useGameStore();
  const [isHiring, setIsHiring] = useState(false);

  const dev = developers.find((d) => d.id === id);
  if (!dev) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={{ fontSize: 48, marginBottom: 16 }}>🔍</Text>
        <Text style={styles.errorText}>Developer not found</Text>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.backLink}>← Back to Feed</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const [gradStart, gradEnd] = SPECIALIZATION_GRADIENTS[dev.specialization];
  const progress = getLevelProgress(dev.xp);

  const handleHire = async () => {
    if (!dev.isAvailable || isHiring) return;
    setIsHiring(true);

    const result = hireDeveloper(dev.id);

    if (result.leveledUp && result.newLevel) {
      setTimeout(() => {
        triggerLevelUp({ id: dev.id, newLevel: result.newLevel!, devName: dev.name });
      }, 600);
    }

    setTimeout(() => setIsHiring(false), 800);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View style={[styles.hero, { backgroundColor: gradStart }]}>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{dev.avatar}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.name}>{dev.name}</Text>
              <Text style={styles.title}>{dev.title}</Text>
            </View>
            <LevelBadge level={dev.level} size="lg" />
          </View>

          <View style={styles.statsRow}>
            {[
              { label: "Hires", value: dev.hireCount },
              { label: "Streak", value: `${dev.streak}🔥` },
              { label: "Rank", value: `#${dev.rank}` },
              { label: "XP", value: dev.xp.toLocaleString(), color: colors.xp },
            ].map(({ label, value, color }) => (
              <View key={label} style={styles.statItem}>
                <Text style={[styles.statValue, color ? { color } : null]}>{value}</Text>
                <Text style={styles.statLabel}>{label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.progressSection}>
            <View style={styles.progressLabels}>
              <Text style={styles.label}>Level Progress</Text>
              <Text style={styles.percentage}>{progress.toFixed(0)}%</Text>
            </View>
            <XPBar xp={dev.xp} />
            <Text style={styles.nextLevelLabel}>
              {dev.xpToNextLevel > 0 ? `${dev.xpToNextLevel} XP to next level` : "MAX LEVEL"}
            </Text>
          </View>

          <Pressable
            onPress={handleHire}
            disabled={!dev.isAvailable}
            style={[
              styles.hireButton,
              { backgroundColor: dev.isAvailable ? colors.success : colors.surfaceElevated }
            ]}
          >
            <Text style={[
              styles.hireButtonText,
              { color: dev.isAvailable ? "#001" : colors.textSecondary }
            ]}>
              {dev.isAvailable ? "🤝 Hire Developer" : "💼 Busy"}
            </Text>
          </Pressable>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>// Tech Stack</Text>
            <View style={styles.techList}>
              {dev.techStack.map((tech) => (
                <View key={tech} style={[styles.techChip, { borderColor: TECH_COLORS[tech] || colors.border }]}>
                  <Text style={[styles.techChipText, { color: TECH_COLORS[tech] || colors.textSecondary }]}>
                    {tech}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={styles.joinedText}>
            Joined {formatJoinDate(new Date(dev.joinedAt))}
          </Text>
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
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  errorText: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  backLink: {
    marginTop: 20,
    color: colors.accent,
  },
  hero: {
    height: 180,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
  avatarContainer: {
    bottom: -40,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 40,
  },
  content: {
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  title: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 16,
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  statLabel: {
    fontSize: 10,
    color: colors.textSecondary,
    textTransform: "uppercase",
  },
  progressSection: {
    marginBottom: 24,
  },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  percentage: {
    fontSize: 11,
    color: colors.xp,
  },
  nextLevelLabel: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 4,
    textAlign: "right",
  },
  hireButton: {
    width: "100%",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  hireButtonText: {
    fontWeight: "700",
    fontSize: 14,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 11,
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 12,
  },
  techList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  techChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  techChipText: {
    fontSize: 11,
    fontWeight: "600",
  },
  joinedText: {
    textAlign: "center",
    color: colors.textSecondary,
    fontSize: 11,
    marginBottom: 40,
  },
});
