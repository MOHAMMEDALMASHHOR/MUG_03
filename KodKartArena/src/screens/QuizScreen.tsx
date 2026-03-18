import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Platform } from "react-native";
import { useGameStore } from "../store/useGameStore";
import { useCardStore } from "../store/useCardStore";
import { soruHavuzu, kodOkumaHavuzu, KodOkumaTipi, SoruTipi } from "../utils/sorular";
import { colors } from "../constants/theme";

export function QuizScreen() {
    const { addXP } = useGameStore();
    const { developers, currentUserId } = useCardStore();
    const currentUser = developers.find((d) => d.id === currentUserId);
    const secilenAlan = currentUser?.specialization || "Frontend Geliştirici";

    const [oyunModu, setOyunModu] = useState<'teorik' | 'kodOkuma'>('teorik');
    const [mevcutBug, setMevcutBug] = useState<number>(0);
    const [geriBildirim, setGeriBildirim] = useState<{ mesaj: string, renk: string } | null>(null);

    const aktifHavuz = oyunModu === 'teorik'
        ? (soruHavuzu[secilenAlan] || soruHavuzu["Frontend Geliştirici"])
        : (kodOkumaHavuzu[secilenAlan] || kodOkumaHavuzu["Frontend Geliştirici"]);

    useEffect(() => {
        setMevcutBug(0);
    }, [secilenAlan, oyunModu]);

    const secenekSecildi = (secilenMetin: string) => {
        if (geriBildirim) return;

        const aktifBug = aktifHavuz[mevcutBug];
        const dogruMu = secilenMetin === aktifBug.dogruCevap;
        const kazanilanXp = dogruMu ? 35 : -15;

        addXP(kazanilanXp); // Zustand integration

        if (dogruMu) {
            setGeriBildirim({ mesaj: `🎯 Harika! (+${kazanilanXp} XP)`, renk: colors.success });
        } else {
            setGeriBildirim({ mesaj: `❌ Hatalı! (${kazanilanXp} XP)`, renk: "#ef4444" });
        }

        setTimeout(() => {
            setGeriBildirim(null);
            let yeniIndeks = Math.floor(Math.random() * aktifHavuz.length);
            if (yeniIndeks === mevcutBug) {
                yeniIndeks = (yeniIndeks + 1) % aktifHavuz.length;
            }
            setMevcutBug(yeniIndeks);
        }, 1800);
    };

    const aktifBug = aktifHavuz[mevcutBug];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.bugContainer}>
                    <View style={styles.bugHeaderRow}>
                        <View style={styles.bugTitleWrapper}>
                            <Text style={styles.bugTitleIcon}>🧠</Text>
                            <Text style={styles.bugTitle}>Yetenek Arenası</Text>
                        </View>
                        <Text style={styles.specText}>{secilenAlan}</Text>
                    </View>

                    <View style={styles.tabContainer}>
                        <TouchableOpacity
                            style={[styles.tabButton, oyunModu === 'teorik' && styles.tabButtonActive]}
                            onPress={() => setOyunModu('teorik')}
                            activeOpacity={0.8}
                        >
                            <Text style={[styles.tabText, oyunModu === 'teorik' && styles.tabTextActive]}>📖 Teorik Sınav</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, oyunModu === 'kodOkuma' && styles.tabButtonActive]}
                            onPress={() => setOyunModu('kodOkuma')}
                            activeOpacity={0.8}
                        >
                            <Text style={[styles.tabText, oyunModu === 'kodOkuma' && styles.tabTextActive]}>🐛 Kod Okuma</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bugDivider} />

                    {geriBildirim ? (
                        <View style={styles.feedbackBox}>
                            <Text style={[styles.feedbackText, { color: geriBildirim.renk }]}>
                                {geriBildirim.mesaj}
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.bugContent}>
                            <Text style={styles.bugQuestion}>
                                {oyunModu === 'teorik' ? (aktifBug as SoruTipi)?.soru : (aktifBug as KodOkumaTipi)?.soruMetni}
                            </Text>

                            {oyunModu === 'kodOkuma' && (aktifBug as KodOkumaTipi)?.kodSnippet && (
                                <View style={styles.codeSnippetBox}>
                                    <Text style={styles.codeText}>{(aktifBug as KodOkumaTipi).kodSnippet}</Text>
                                </View>
                            )}
                            <View style={styles.optionsContainer}>
                                {aktifBug?.secenekler.map((secenek: string, i: number) => (
                                    <TouchableOpacity
                                        key={i}
                                        style={styles.optionBtn}
                                        activeOpacity={0.7}
                                        onPress={() => secenekSecildi(secenek)}
                                    >
                                        <Text style={styles.optionText}>{secenek}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scroll: {
        padding: 20,
        alignItems: "center",
    },
    bugContainer: {
        width: "100%",
        maxWidth: 420,
        backgroundColor: colors.surface,
        padding: 24,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 8,
    },
    bugHeaderRow: {
        alignItems: "center",
        marginBottom: 20,
    },
    bugTitleWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    bugTitleIcon: {
        fontSize: 22,
        marginRight: 8,
    },
    bugTitle: {
        fontSize: 22,
        fontWeight: "900",
        color: colors.textPrimary,
    },
    specText: {
        color: colors.accent,
        fontSize: 12,
        marginTop: 4,
        fontWeight: "bold",
    },
    tabContainer: {
        flexDirection: "row",
        backgroundColor: colors.background,
        borderRadius: 12,
        padding: 4,
        marginBottom: 5,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 8,
    },
    tabButtonActive: {
        backgroundColor: colors.accent,
    },
    tabText: {
        color: colors.textSecondary,
        fontWeight: "700",
        fontSize: 14,
    },
    tabTextActive: {
        color: "#0f172a",
        fontWeight: "900",
    },
    bugDivider: {
        height: 1,
        backgroundColor: colors.border,
        width: "100%",
        marginVertical: 16,
    },
    bugContent: {
        width: "100%",
    },
    bugQuestion: {
        fontSize: 16,
        color: colors.textPrimary,
        marginBottom: 16,
        fontWeight: "600",
        lineHeight: 24,
    },
    codeSnippetBox: {
        backgroundColor: "#1E1E1E",
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#333",
        marginBottom: 24,
    },
    codeText: {
        color: "#D4D4D4",
        fontFamily: Platform.OS === 'ios' ? "Courier" : "monospace",
        fontSize: 13,
        lineHeight: 20,
    },
    optionsContainer: {
        gap: 12,
    },
    optionBtn: {
        backgroundColor: colors.surfaceElevated,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border,
    },
    optionText: {
        color: colors.textPrimary,
        fontWeight: "700",
        fontSize: 14,
        textAlign: "center",
    },
    feedbackBox: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: 16,
    },
    feedbackText: {
        fontSize: 24,
        fontWeight: "900",
        textAlign: "center",
        paddingHorizontal: 20,
    },
});
