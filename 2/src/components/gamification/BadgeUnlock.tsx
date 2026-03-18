import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { Badge } from "../../types";
import { colors } from "../../constants/theme";

const RARITY_COLORS = {
  common: "#888888",
  rare: "#4FC3F7",
  epic: "#CE93D8",
  legendary: "#FFD700",
};

interface BadgeDisplayProps {
  badge: Badge;
  size?: number;
}

export function BadgeDisplay({ badge, size = 40 }: BadgeDisplayProps) {
  const rarityColor = RARITY_COLORS[badge.rarity];
  
  if (!badge.isUnlocked) {
    return (
      <View style={[styles.badgeBase, { width: size, height: size, opacity: 0.3, backgroundColor: "rgba(255,255,255,0.04)" }]}>
        <Text style={{ fontSize: size * 0.45, color: "#888" }}>?</Text>
      </View>
    );
  }

  return (
    <View style={[styles.badgeBase, { width: size, height: size, backgroundColor: `${rarityColor}18`, borderColor: rarityColor }]}>
      <Text style={{ fontSize: size * 0.5 }}>{badge.icon}</Text>
    </View>
  );
}

interface BadgeUnlockAnimationProps {
  badge: Badge | null;
  onDone: () => void;
}

export function BadgeUnlockAnimation({ badge, onDone }: BadgeUnlockAnimationProps) {
  const [popAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (badge) {
      Animated.spring(popAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }).start();

      const t = setTimeout(() => {
        Animated.timing(popAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(onDone);
      }, 3000);

      return () => clearTimeout(t);
    }
  }, [badge]);

  if (!badge) return null;

  return (
    <View style={styles.unlockContainer} pointerEvents="none">
      <Animated.View 
        style={[
          styles.unlockModal,
          { 
            borderColor: RARITY_COLORS[badge.rarity],
            shadowColor: RARITY_COLORS[badge.rarity],
            transform: [
              { scale: popAnim },
              { translateY: popAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }
            ],
            opacity: popAnim
          }
        ]}
      >
        <Text style={[styles.unlockLabel, { color: RARITY_COLORS[badge.rarity] }]}>Badge Unlocked!</Text>
        <Text style={styles.unlockIcon}>{badge.icon}</Text>
        <Text style={styles.unlockName}>{badge.name}</Text>
        <Text style={[styles.unlockRarity, { color: RARITY_COLORS[badge.rarity] }]}>{badge.rarity}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeBase: {
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  unlockContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
  unlockModal: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: 20,
    borderWidth: 2,
    padding: 24,
    alignItems: "center",
    elevation: 15,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    width: "80%",
    maxWidth: 280,
  },
  unlockLabel: {
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  unlockIcon: {
    fontSize: 48,
    marginVertical: 8,
  },
  unlockName: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  unlockRarity: {
    fontSize: 10,
    textTransform: "uppercase",
    marginTop: 4,
  },
});
