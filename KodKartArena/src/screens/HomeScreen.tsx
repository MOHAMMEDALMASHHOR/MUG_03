import React, { useState, useMemo } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  Dimensions,
  Platform 
} from "react-native";
import { MotiView, AnimatePresence } from "moti";
// import { DevCard } from "../components/DevCard/DevCard"; // We'll need to convert this too
// import { SpecializationChip } from "../components/ui/SpecializationChip";
// import { GradientButton } from "../components/ui/GradientButton";
import { useCardStore } from "../store/useCardStore";
import { colors } from "../constants/theme";
import { Specialization } from "../types";

type FilterType = "All" | "Available" | Specialization | "Top Ranked";

const FILTER_OPTIONS: FilterType[] = [
  "All",
  "Available",
  "Top Ranked",
  "Mobile",
  "Frontend",
  "Backend",
  "AI/ML",
  "DevOps",
];

const { width } = Dimensions.get('window');

// Simple placeholder for DevCard until we migrate it
const DevCardPlaceholder = ({ developer, onClick }: any) => (
  <TouchableOpacity 
    onPress={onClick}
    style={{
      backgroundColor: colors.surface,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: colors.border
    }}
  >
    <Text style={{ color: colors.textPrimary, fontSize: 18, fontWeight: 'bold' }}>{developer.name}</Text>
    <Text style={{ color: colors.textSecondary }}>{developer.title}</Text>
  </TouchableOpacity>
);

export function HomeScreen({ navigation }: any) {
  const { developers } = useCardStore();
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchExpanded, setSearchExpanded] = useState(false);

  const filtered = useMemo(() => {
    let devs = [...developers];
    if (activeFilter === "Available") devs = devs.filter((d) => d.isAvailable);
    else if (activeFilter === "Top Ranked") devs = devs.sort((a, b) => a.rank - b.rank);
    else if (activeFilter !== "All") devs = devs.filter((d) => d.specialization === activeFilter);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      devs = devs.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.title.toLowerCase().includes(q) ||
          d.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    return devs;
  }, [developers, activeFilter, searchQuery]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.title}>DevCard Arena</Text>
            <Text style={styles.subtitle}>
              {developers.filter((d) => d.isAvailable).length} devs available
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setSearchExpanded(!searchExpanded)}
            style={styles.searchButton}
          >
            <Text style={{ fontSize: 16 }}>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <AnimatePresence>
          {searchExpanded && (
            <MotiView
              from={{ height: 0, opacity: 0 }}
              animate={{ height: 48, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={styles.searchBarContainer}
            >
              <TextInput
                autoFocus
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search devs, titles, tech..."
                placeholderTextColor={colors.textSecondary}
                style={styles.searchInput}
              />
            </MotiView>
          )}
        </AnimatePresence>

        {/* Filter chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
          contentContainerStyle={styles.filterContainer}
        >
          {FILTER_OPTIONS.map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => setActiveFilter(f)}
              style={[
                styles.filterChip,
                activeFilter === f && styles.filterChipActive
              ]}
            >
              <Text style={[
                styles.filterText,
                activeFilter === f && styles.filterTextActive
              ]}>
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Card list */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {filtered.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={{ fontSize: 48, marginBottom: 12 }}>🔎</Text>
            <Text style={styles.emptyText}>No developers found</Text>
          </View>
        ) : (
          filtered.map((dev, i) => (
            <DevCardPlaceholder
              key={dev.id}
              developer={dev}
              onClick={() => navigation.navigate("DevDetail", { id: dev.id })}
            />
          ))
        )}
      </ScrollView>

      {/* Floating create button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Create")}
        style={styles.fab}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: `${colors.background}ee`,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  searchButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarContainer: {
    overflow: "hidden",
    marginBottom: 12,
  },
  searchInput: {
    width: "100%",
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: `${colors.accent}44`,
    color: colors.textPrimary,
    fontSize: 13,
  },
  filterScroll: {
    marginBottom: 14,
  },
  filterContainer: {
    gap: 6,
    paddingRight: 20,
  },
  filterChip: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "transparent",
  },
  filterChipActive: {
    borderColor: colors.accent,
    backgroundColor: `${colors.accent}22`,
  },
  filterText: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  filterTextActive: {
    color: colors.accent,
    fontWeight: "700",
  },
  listContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabText: {
    color: "#FFF",
    fontSize: 32,
    marginTop: -4,
  },
});
