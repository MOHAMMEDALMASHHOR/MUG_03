import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { colors } from "../../constants/theme";

interface XPFloaterProps {
  amount: number;
  visible: boolean;
  onDone: () => void;
}

export function XPFloater({ amount, visible, onDone }: XPFloaterProps) {
  const [floatAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(floatAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(onDone);
    } else {
      floatAnim.setValue(0);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.container} pointerEvents="none">
      <Animated.Text 
        style={[
          styles.text,
          { 
            opacity: floatAnim.interpolate({ inputRange: [0, 0.8, 1], outputRange: [1, 1, 0] }),
            transform: [
              { translateY: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -60] }) },
              { scale: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.2] }) }
            ]
          }
        ]}
      >
        +{amount} XP ✨
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 500,
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.xp,
    textShadowColor: "rgba(108, 99, 255, 0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
