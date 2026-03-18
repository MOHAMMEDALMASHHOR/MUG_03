import { View, Text, StyleSheet } from "react-native";
import { DeveloperLevel } from "../../types";
import { LEVEL_GLOW_COLORS } from "../../constants/levels";

interface LevelBadgeProps {
  level: DeveloperLevel;
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP = { 
  sm: { fontSize: 8, px: 6, py: 2 }, 
  md: { fontSize: 10, px: 8, py: 3 }, 
  lg: { fontSize: 12, px: 12, py: 4 } 
};

export function LevelBadge({ level, size = "md" }: LevelBadgeProps) {
  const glowColor = LEVEL_GLOW_COLORS[level];
  const s = SIZE_MAP[size];
  const isLegendary = level === "Legendary";

  return (
    <View
      style={[
        styles.badge,
        {
          paddingHorizontal: s.px,
          paddingVertical: s.py,
          borderColor: isLegendary ? "#FFD700" : glowColor,
          backgroundColor: isLegendary ? "#1a0030" : `${glowColor}22`,
          shadowColor: isLegendary ? "#FF7F00" : glowColor,
          shadowOpacity: 0.5,
          shadowRadius: isLegendary ? 8 : 4,
          elevation: isLegendary ? 10 : 2,
        }
      ]}
    >
      <Text style={[
        styles.text,
        {
          fontSize: s.fontSize,
          color: isLegendary ? "#FFD700" : glowColor,
        }
      ]}>
        {isLegendary ? "✦ " : ""}{level}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
