import { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  gradient?: [string, string];
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost" | "danger";
  style?: any;
}

export function GradientButton({
  children,
  onClick,
  gradient = ["#6C63FF", "#9C4DFF"],
  disabled = false,
  fullWidth = false,
  size = "md",
  variant = "primary",
  style,
}: GradientButtonProps) {
  
  const getVariantStyle = () => {
    if (variant === "ghost") {
      return {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: `${gradient[0]}66`,
      };
    }
    if (variant === "danger") {
      return {
        backgroundColor: "#FF4444",
      };
    }
    return {
      backgroundColor: gradient[0],
    };
  };

  const getSizeStyle = () => {
    switch (size) {
      case "sm": return { paddingVertical: 8, paddingHorizontal: 16 };
      case "lg": return { paddingVertical: 16, paddingHorizontal: 32 };
      default: return { paddingVertical: 12, paddingHorizontal: 24 };
    }
  };

  const getTextStyle = () => {
    switch (size) {
      case "sm": return { fontSize: 11 };
      case "lg": return { fontSize: 15 };
      default: return { fontSize: 13 };
    }
  };

  return (
    <Pressable
      onPress={disabled ? undefined : onClick}
      style={({ pressed }) => [
        styles.button,
        getSizeStyle(),
        getVariantStyle(),
        fullWidth && { width: "100%" },
        disabled && { opacity: 0.5 },
        pressed && !disabled && { opacity: 0.8, transform: [{ scale: 0.98 }] },
        style
      ]}
    >
      <Text style={[
        styles.text,
        getTextStyle(),
        { color: variant === "ghost" ? gradient[0] : "#FFFFFF" }
      ]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontWeight: "700",
    textAlign: "center",
  },
});
