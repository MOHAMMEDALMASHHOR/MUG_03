import { useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { Developer } from "../../types";
import { colors, SPECIALIZATION_GRADIENTS, TECH_COLORS } from "../../constants/theme";
import { LEVEL_GLOW_COLORS } from "../../constants/levels";
import { HolographicShimmer } from "./HolographicShimmer";
import { XPBar } from "./XPBar";
import { LevelBadge } from "./LevelBadge";
import { CardBack } from "./CardBack";

interface DevCardProps {
  developer: Developer;
  onClick?: () => void;
  index?: number;
  compact?: boolean;
}

export function DevCard({ developer, onClick, index = 0, compact = false }: DevCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const [gradStart, gradEnd] = SPECIALIZATION_GRADIENTS[developer.specialization];
  const glowColor = LEVEL_GLOW_COLORS[developer.level];
  const isLegendary = developer.level === "Legendary";

  const handleLongPress = () => {
    setIsFlipped(!isFlipped);
  };

  const handlePress = () => {
    if (!isFlipped && onClick) onClick();
    if (isFlipped) setIsFlipped(false);
  };

  return (
    <View style={[
      styles.container,
      compact ? styles.containerCompact : styles.containerFull
    ]}>
      <Pressable 
        onPress={handlePress}
        onLongPress={handleLongPress}
        style={({ pressed }) => [
          styles.cardWrapper,
          { 
            backgroundColor: gradStart,
            borderColor: isLegendary ? "#FFD700" : `${glowColor}44`,
            opacity: pressed ? 0.9 : 1
          }
        ]}
      >
        {!isFlipped ? (
          <View style={styles.frontContent}>
            <HolographicShimmer />
            
            <View style={styles.header}>
              <View style={styles.userInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{developer.avatar}</Text>
                </View>
                <View>
                  <Text style={styles.userName}>{developer.name}</Text>
                  <Text style={styles.userTitle}>{developer.title}</Text>
                </View>
              </View>

              <View style={styles.levelInfo}>
                <LevelBadge level={developer.level} size={compact ? "sm" : "md"} />
                {!compact && (
                  <Text style={styles.rankText}>#{developer.rank}</Text>
                )}
              </View>
            </View>

            <View style={styles.statusRow}>
              <View 
                style={[
                  styles.statusDot, 
                  { backgroundColor: developer.isAvailable ? colors.success : colors.textSecondary }
                ]} 
              />
              <Text style={[
                styles.statusText,
                { color: developer.isAvailable ? colors.success : colors.textSecondary }
              ]}>
                {developer.isAvailable ? "AVAILABLE" : "OCCUPIED"}
              </Text>
            </View>

            <XPBar xp={developer.xp} compact={compact} />

            {!compact && developer.techStack.length > 0 && (
              <View style={styles.techStack}>
                {developer.techStack.slice(0, 3).map((tech) => (
                  <View key={tech} style={[styles.techChip, { borderColor: TECH_COLORS[tech] || colors.border }]}>
                    <Text style={[styles.techChipText, { color: TECH_COLORS[tech] || colors.textSecondary }]}>
                      {tech}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ) : (
          <CardBack developer={developer} />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  containerFull: {
    width: "100%",
  },
  containerCompact: {
    width: 200,
  },
  cardWrapper: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    height: 220,
  },
  frontContent: {
    padding: 16,
    height: "100%",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  avatarText: {
    fontSize: 20,
  },
  userName: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  userTitle: {
    fontSize: 10,
    color: "rgba(255,255,255,0.6)",
  },
  levelInfo: {
    alignItems: "flex-end",
    gap: 4,
  },
  rankText: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  techStack: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  techChip: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  techChipText: {
    fontSize: 9,
  },
});
