import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/theme";
import { getLevelProgress } from "../../utils/xpCalculator";

interface XPBarProps {
  xp: number;
  animate?: boolean;
  compact?: boolean;
}

export function XPBar({ xp, animate = true, compact = false }: XPBarProps) {
  const progress = getLevelProgress(xp);

  return (
    <View style={styles.container}>
      {!compact && (
        <View style={styles.labelContainer}>
          <Text style={styles.xpText}>{xp.toLocaleString()} XP</Text>
          <Text style={styles.progressText}>{progress.toFixed(0)}%</Text>
        </View>
      )}
      <View style={[styles.barContainer, { height: compact ? 4 : 6 }]}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${progress}%`,
              backgroundColor: colors.xp,
              shadowColor: colors.xp,
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 4,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  xpText: {
    fontSize: 10,
    color: colors.xp,
    letterSpacing: 0.5,
  },
  progressText: {
    fontSize: 10,
    color: colors.xp,
  },
  barContainer: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 100,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 100,
  },
});
