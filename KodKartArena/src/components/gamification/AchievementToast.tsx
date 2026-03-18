import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Animated, Dimensions } from "react-native";
import { Achievement } from "../../types";
import { colors } from "../../constants/theme";

interface AchievementToastProps {
  achievement: Achievement | null;
  onDismiss: () => void;
}

export function AchievementToast({ achievement, onDismiss }: AchievementToastProps) {
  const [slideAnim] = useState(new Animated.Value(300));
  const [opacityAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (achievement) {
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          tension: 50,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      slideAnim.setValue(300);
      opacityAnim.setValue(0);
    }
  }, [achievement]);

  if (!achievement) return null;

  return (
    <Animated.View 
      style={[
        styles.toast,
        { 
          transform: [{ translateX: slideAnim }],
          opacity: opacityAnim 
        }
      ]}
    >
      <Pressable onPress={onDismiss} style={styles.content}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>{achievement.icon}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Achievement Unlocked!</Text>
          <Text style={styles.title} numberOfLines={1}>{achievement.title}</Text>
          <Text style={styles.xp}>+{achievement.xpReward} XP</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 40,
    right: 20,
    left: 20,
    zIndex: 1000,
    backgroundColor: colors.surfaceElevated,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: `${colors.accent}44`,
    elevation: 8,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: `${colors.accent}22`,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    color: colors.accent,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  xp: {
    fontSize: 11,
    color: colors.textSecondary,
  },
});
