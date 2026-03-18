import { View, StyleSheet } from "react-native";

export function HolographicShimmer() {
  // Simplification for Native since complex gradients can be heavy, but adding a subtle overlay
  return (
    <View style={styles.container}>
      <View style={styles.shimmer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    overflow: "hidden",
  },
  shimmer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.03)",
  },
});
