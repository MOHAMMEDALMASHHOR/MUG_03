import { useState, useRef } from "react";
import { View, Text, ScrollView, TextInput, Pressable, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCardStore } from "../store/useCardStore";
import { colors, SPECIALIZATION_GRADIENTS, TECH_COLORS } from "../constants/theme";
import { Specialization, DeveloperLevel } from "../types";
import { DevCard } from "../components/DevCard/DevCard";
import { createDefaultDeveloper, getAvatarFromName } from "../utils/levelUtils";
import { LEVEL_ORDER } from "../constants/levels";

const SPECIALIZATIONS: Specialization[] = ["Mobile", "Frontend", "Backend", "AI/ML", "DevOps"];
const TECH_OPTIONS = Object.keys(TECH_COLORS);

export function CreateCardScreen() {
  const navigation = useNavigation<any>();
  const { addDeveloper, setCurrentUser } = useCardStore();
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [specialization, setSpecialization] = useState<Specialization>("Frontend");
  const [level, setLevel] = useState<DeveloperLevel>("Junior");
  const [techSearch, setTechSearch] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);

  const preview = createDefaultDeveloper({
    name: name || "Your Name",
    title: title || "Your Title",
    specialization,
    level,
    avatar: getAvatarFromName(name || "Dev"),
    techStack,
    xp: LEVEL_ORDER.indexOf(level) > 0 ? 100 : 0,
  });

  const filteredTechs = TECH_OPTIONS.filter(
    (t) => t.toLowerCase().includes(techSearch.toLowerCase()) && !techStack.includes(t)
  );

  const handleCreate = () => {
    const dev = createDefaultDeveloper({
      name: name.trim() || "Anonymous Dev",
      title: title.trim() || "Software Engineer",
      specialization,
      level,
      avatar: getAvatarFromName(name || "Dev"),
      techStack,
    });

    addDeveloper(dev);
    setCurrentUser(dev.id);
    navigation.navigate("DevCard", { id: dev.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => (step > 1 ? setStep(step - 1) : navigation.goBack())} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Create Dev Card</Text>
          <Text style={styles.headerSubtitle}>Step {step} of 3</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.previewContainer}>
          <DevCard developer={preview} compact />
        </View>

        {step === 1 && (
          <View>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="e.g. Alex Rivera"
              placeholderTextColor={colors.textSecondary}
            />

            <Text style={styles.label}>Job Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="e.g. Senior React Native Dev"
              placeholderTextColor={colors.textSecondary}
            />

            <Text style={styles.label}>Specialization</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.specScroll}>
              {SPECIALIZATIONS.map((s) => {
                const [g] = SPECIALIZATION_GRADIENTS[s];
                const active = specialization === s;
                return (
                  <Pressable
                    key={s}
                    onPress={() => setSpecialization(s)}
                    style={[
                      styles.specChip,
                      active ? { borderColor: g, backgroundColor: `${g}22` } : null
                    ]}
                  >
                    <Text style={[styles.specText, active ? { color: g, fontWeight: "700" } : null]}>
                      {s}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <Pressable style={styles.nextButton} onPress={() => setStep(2)}>
              <Text style={styles.nextButtonText}>Next →</Text>
            </Pressable>
          </View>
        )}

        {step === 2 && (
          <View>
            <Text style={styles.label}>Your Level</Text>
            {LEVEL_ORDER.map((l) => (
              <Pressable
                key={l}
                onPress={() => setLevel(l)}
                style={[styles.levelItem, level === l ? styles.levelItemActive : null]}
              >
                <Text style={styles.levelName}>{l}</Text>
                {level === l && <Text style={styles.checkmark}>✓</Text>}
              </Pressable>
            ))}
            <Pressable style={styles.nextButton} onPress={() => setStep(3)}>
              <Text style={styles.nextButtonText}>Next →</Text>
            </Pressable>
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={styles.label}>Tech Stack ({techStack.length} selected)</Text>
            <TextInput
              style={styles.input}
              value={techSearch}
              onChangeText={setTechSearch}
              placeholder="Search technologies..."
              placeholderTextColor={colors.textSecondary}
            />
            <View style={styles.techGrid}>
              {filteredTechs.slice(0, 20).map((t) => (
                <Pressable
                  key={t}
                  onPress={() => {
                    setTechStack([...techStack, t]);
                    setTechSearch("");
                  }}
                  style={styles.techChip}
                >
                  <Text style={styles.techText}>{t}</Text>
                </Pressable>
              ))}
            </View>
            <Pressable style={[styles.nextButton, { backgroundColor: colors.success }]} onPress={handleCreate}>
              <Text style={styles.nextButtonText}>🚀 Create My Card</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surfaceElevated,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  backButtonText: {
    color: colors.textPrimary,
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  headerSubtitle: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  previewContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    fontSize: 11,
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
    marginTop: 20,
  },
  input: {
    backgroundColor: colors.surfaceElevated,
    padding: 12,
    borderRadius: 12,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.border,
  },
  specScroll: {
    flexDirection: "row",
    paddingBottom: 4,
  },
  specChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceElevated,
    marginRight: 8,
  },
  specText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  nextButton: {
    marginTop: 24,
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#FFF",
    fontWeight: "700",
  },
  levelItem: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceElevated,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  levelItemActive: {
    borderColor: colors.accent,
    backgroundColor: `${colors.accent}18`,
  },
  levelName: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: "700",
  },
  checkmark: {
    color: colors.accent,
  },
  techGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  techChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceElevated,
  },
  techText: {
    fontSize: 11,
    color: colors.textSecondary,
  },
});
