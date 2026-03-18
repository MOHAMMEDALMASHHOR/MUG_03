import { View, Text, StyleSheet } from "react-native";
import { Developer } from "../../types";
import { colors, SPECIALIZATION_GRADIENTS } from "../../constants/theme";
import { formatJoinDate } from "../../utils/levelUtils";

interface CardBackProps {
  developer: Developer;
}

export function CardBack({ developer }: CardBackProps) {
  const [gradStart, gradEnd] = SPECIALIZATION_GRADIENTS[developer.specialization];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: gradStart, // Using solid color as fallback for gradient in simplistic port
        }
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>// Card Stats</Text>

        {[
          { label: "Joined", value: formatJoinDate(new Date(developer.joinedAt)) },
          { label: "Total Hires", value: `${developer.hireCount}x` },
          { label: "Streak", value: `${developer.streak} days 🔥` },
          { label: "Rank", value: `#${developer.rank}` },
          { label: "Endorsements", value: `${developer.endorsements.length}` },
        ].map(({ label, value }) => (
          <View key={label} style={styles.statRow}>
            <Text style={styles.statLabel}>{label}</Text>
            <Text style={styles.statValue}>{value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          // Achievements ({developer.achievements.filter((a) => a.isCompleted).length}/{developer.achievements.length})
        </Text>
        <View style={styles.achievementGrid}>
          {developer.achievements.slice(0, 4).map((a) => (
            <Text
              key={a.id}
              style={[
                styles.achievementIcon,
                { opacity: a.isCompleted ? 1 : 0.3 }
              ]}
            >
              {a.icon}
            </Text>
          ))}
        </View>
      </View>

      <Text style={styles.footerText}>DEVCARD ARENA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    padding: 20,
    backfaceVisibility: "hidden", // This works in RN to some extent
  },
  content: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    color: "rgba(255,255,255,0.5)",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },
  statLabel: {
    fontSize: 11,
    color: "rgba(255,255,255,0.5)",
  },
  statValue: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  achievementGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  achievementIcon: {
    fontSize: 24,
  },
  footerText: {
    position: "absolute",
    bottom: 12,
    right: 16,
    fontSize: 10,
    color: "rgba(255,255,255,0.2)",
  },
});
