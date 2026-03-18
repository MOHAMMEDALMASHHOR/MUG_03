import { View, Text, Pressable, StyleSheet } from "react-native";
import { TECH_COLORS, colors } from "../../constants/theme";

interface TechStackBadgeProps {
  tech: string;
  onRemove?: () => void;
  onClick?: () => void;
  selected?: boolean;
  size?: "sm" | "md";
}

export function TechStackBadge({ tech, onRemove, onClick, selected = false, size = "md" }: TechStackBadgeProps) {
  const color = TECH_COLORS[tech] ?? "#888";
  
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        styles.badge,
        {
          borderColor: selected ? color : color + "44",
          backgroundColor: selected ? `${color}33` : `${color}11`,
          paddingVertical: size === "sm" ? 4 : 6,
          paddingHorizontal: size === "sm" ? 8 : 10,
        },
        pressed && (onClick || onRemove) && { opacity: 0.8, transform: [{ scale: 0.96 }] }
      ]}
    >
      <Text style={[
        styles.text,
        { color: selected ? color : color + "bb", fontWeight: selected ? "700" : "400", fontSize: size === "sm" ? 10 : 11 }
      ]}>
        {tech}
      </Text>
      {onRemove && (
        <Pressable onPress={(e) => { e.stopPropagation(); onRemove(); }} hitSlop={10}>
          <Text style={styles.removeText}>×</Text>
        </Pressable>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    marginRight: 6,
    marginBottom: 6,
  },
  text: {
  },
  removeText: {
    color: colors.textSecondary,
    fontSize: 14,
    marginLeft: 4,
    fontWeight: "700",
  },
});
