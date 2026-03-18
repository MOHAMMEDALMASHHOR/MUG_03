import { View, Text, Pressable, StyleSheet } from "react-native";
import { Specialization } from "../../types";
import { SPECIALIZATION_GRADIENTS, colors } from "../../constants/theme";

interface SpecializationChipProps {
  spec: Specialization;
  selected?: boolean;
  onClick?: () => void;
}

export function SpecializationChip({ spec, selected = false, onClick }: SpecializationChipProps) {
  const [g1] = SPECIALIZATION_GRADIENTS[spec];
  
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        styles.chip,
        {
          borderColor: selected ? g1 : "rgba(255,255,255,0.1)",
          backgroundColor: selected ? `${g1}33` : "transparent",
        },
        pressed && { opacity: 0.8, transform: [{ scale: 0.96 }] }
      ]}
    >
      <Text style={[
        styles.text,
        { color: selected ? g1 : "rgba(255,255,255,0.5)", fontWeight: selected ? "700" : "400" }
      ]}>
        {spec}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 100,
    borderWidth: 1,
    marginRight: 8,
  },
  text: {
    fontSize: 11,
  },
});
