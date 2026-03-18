import { useEffect, useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet, Animated } from "react-native";
import { colors } from "../../constants/theme";
import { DeveloperLevel } from "../../types";
import { LEVEL_GLOW_COLORS } from "../../constants/levels";
import { LevelBadge } from "../DevCard/LevelBadge";

interface LevelUpModalProps {
  visible: boolean;
  newLevel: DeveloperLevel;
  devName: string;
  onDismiss: () => void;
}

export function LevelUpModal({ visible, newLevel, devName, onDismiss }: LevelUpModalProps) {
  const glowColor = LEVEL_GLOW_COLORS[newLevel];
  const [scaleAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }).start();

      const t = setTimeout(onDismiss, 4000);
      return () => clearTimeout(t);
    } else {
      scaleAnim.setValue(0);
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onDismiss}
    >
      <Pressable style={styles.overlay} onPress={onDismiss}>
        <Animated.View 
          style={[
            styles.modalContent,
            { 
              borderColor: glowColor,
              shadowColor: glowColor,
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <Text style={styles.emoji}>🎉</Text>
          <Text style={styles.label}>LEVEL UP!</Text>
          <Text style={styles.name}>{devName}</Text>
          <LevelBadge level={newLevel} size="lg" />
          <Text style={styles.desc}>
            You've reached <Text style={{ color: glowColor, fontWeight: "700" }}>{newLevel}</Text> level!
          </Text>
          <Pressable 
            style={[styles.button, { backgroundColor: `${glowColor}22`, borderColor: glowColor }]}
            onPress={onDismiss}
          >
            <Text style={[styles.buttonText, { color: glowColor }]}>AWESOME! 🚀</Text>
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: colors.surfaceElevated,
    borderRadius: 24,
    borderWidth: 2,
    padding: 40,
    alignItems: "center",
    width: "100%",
    maxWidth: 320,
    elevation: 20,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
    letterSpacing: 2,
    marginBottom: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: 16,
  },
  desc: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 14,
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 14,
  },
});
