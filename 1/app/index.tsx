import { useEffect, useState } from "react";
import { Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { kodOkumaHavuzu, KodOkumaTipi, soruHavuzu, SoruTipi } from "./sorular";

const getSeviyeBilgisi = (xp: number) => {
  if (xp >= 250) return { adi: "Senior", ikon: "🥇", renk: "#FFD700", bg: "#422006", max: 500 };
  if (xp >= 100) return { adi: "Mid-Level", ikon: "🥈", renk: "#C0C0C0", bg: "#1e293b", max: 250 };
  return { adi: "Junior", ikon: "🥉", renk: "#38bdf8", bg: "#0f172a", max: 100 };
};



const LogoHeader = () => (
  <View style={styles.headerContainer}>
    <View style={styles.logoCircle}>
      <Image source={require("../assets/images/splash.png")} style={styles.logoImage} />
    </View>
    <Text style={styles.headerTitle}>KodKart</Text>
    <Text style={styles.headerSubtitle}>Profesyonel Yazılımcı Kimliği</Text>
  </View>
);

const ProgressBar = ({ xp, max, renk }: { xp: number; max: number; renk: string }) => {
  const yuzde = Math.min((Math.max(xp, 0) / max) * 100, 100);
  
  return (
    <View style={styles.progressWrapper}>
      <View style={styles.progressHeader}>
        <Text style={styles.progressLabel}>Sonraki Seviye</Text>
        <Text style={[styles.progressValues, { color: renk }]}>{xp} / {max} XP</Text>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${yuzde}%`, backgroundColor: renk }]} />
      </View>
    </View>
  );
};

const ProfileCard = ({ xp, isMusait, onIseAl, secilenAlan, onAlanDegistir }: { xp: number; isMusait: boolean; onIseAl: () => void; secilenAlan: string; onAlanDegistir: () => void; }) => {
  const seviye = getSeviyeBilgisi(xp);

  const basariyiPaylas = async () => {
    try {
      const mesaj = `Selam ağım! 🚀 KodKart Yetenek Arenası'nda yeteneklerimi test ettim ve ${secilenAlan} alanında ${xp} XP toplayarak '${seviye.adi}' unvanına ulaştım! 🏆 Sen de yazılımcı kimliğini oluştur ve kodlama düellosuna katıl! 💻 #KodKart #Yazılım #Geliştirici #Teknoloji`;
      
      await Share.share({
        message: mesaj,
      });
    } catch (error: any) {
      console.log("Paylaşım hatası:", error.message);
    }
  };

  return (
    <View style={[styles.card, { borderColor: seviye.renk, shadowColor: seviye.renk, backgroundColor: seviye.bg }]}>
      <View style={styles.cardHeaderRow}>
        <View>
          <Text style={styles.name}>Kullanıcı</Text>
          <TouchableOpacity onPress={onAlanDegistir} activeOpacity={0.7}>
            <Text style={[styles.role, { textDecorationLine: 'underline' }]}>{secilenAlan} ✏️</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.xpBadge, { borderColor: seviye.renk }]}>
          <Text style={[styles.xpValue, { color: seviye.renk }]}>{xp}</Text>
          <Text style={styles.xpLabel}>XP</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.infoRow}>
        <Text style={styles.label}>Uzmanlık</Text>
        <Text style={styles.value}>{secilenAlan}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Aktif Seviye</Text>
        <Text style={[styles.value, { color: seviye.renk }]}>{seviye.adi} {seviye.ikon}</Text>
      </View>

      <ProgressBar xp={xp} max={seviye.max} renk={seviye.renk} />

      <View style={styles.statusContainer}>
        <View style={[styles.statusDot, { backgroundColor: isMusait ? "#22c55e" : "#ef4444" }]} />
        <Text style={styles.statusText}>
          {isMusait ? "Müsait (Yeni Fırsatlara Açık)" : "Aktif Projelerde Çalışıyor"}
        </Text>
      </View>

      {isMusait && (
        <TouchableOpacity style={styles.hireBtn} activeOpacity={0.8} onPress={onIseAl}>
          <Text style={styles.hireBtnText}>Hemen İşe Al (+50 Bonus XP)</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.shareBtn} activeOpacity={0.8} onPress={basariyiPaylas}>
        <Text style={styles.shareBtnText}>💼 LinkedIn'de Paylaş</Text>
      </TouchableOpacity>
    </View>
  );
};

// --- Types ---
interface GeriBildirim {
  mesaj: string;
  renk: string;
}

const BugHunter = ({ onXpChange, secilenAlan }: { onXpChange: (xp: number) => void; secilenAlan: string }) => {
  const [oyunModu, setOyunModu] = useState<'teorik' | 'kodOkuma'>('teorik');
  const [mevcutBug, setMevcutBug] = useState<number>(0);
  const [geriBildirim, setGeriBildirim] = useState<GeriBildirim | null>(null);

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

    onXpChange(kazanilanXp);

    if (dogruMu) {
      setGeriBildirim({ mesaj: `Harika! (+${kazanilanXp} XP) 🚀`, renk: "#22c55e" });
    } else {
      setGeriBildirim({ mesaj: `Hatalı Hamle! (${kazanilanXp} XP) ❌`, renk: "#ef4444" });
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
    <View style={styles.bugContainer}>
      <View style={styles.bugHeaderRow}>
        <View style={styles.bugTitleWrapper}>
          <Text style={styles.bugTitleIcon}>🧠</Text>
          <Text style={styles.bugTitle}>Yetenek Arenası</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, oyunModu === 'teorik' && styles.tabButtonActive]}
          onPress={() => setOyunModu('teorik')}
          activeOpacity={0.8}
        >
          <Text style={[styles.tabText, oyunModu === 'teorik' && styles.tabTextActive]}>🧠 Teorik Sınav</Text>
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
  );
};

const OnboardingScreen = ({ onSelectAlan }: { onSelectAlan: (alan: string) => void }) => {
  const alanlar = [
    { baslik: "Mobil Geliştirici", detay: "React Native, Swift, Kotlin", ikon: "📱" },
    { baslik: "Frontend Geliştirici", detay: "React, Vue, HTML/CSS", ikon: "🌐" },
    { baslik: "Backend Geliştirici", detay: "Node.js, C#, Python", ikon: "⚙️" },
    { baslik: "Ağ Mühendisi", detay: "Routing, TCP/IP, Güvenlik", ikon: "📡" },
    { baslik: "Veritabanı Uzmanı", detay: "SQL, NoSQL, Mimari", ikon: "💾" },
  ];

  return (
    <View style={styles.onboardingContainer}>
      <LogoHeader />
      
      <Text style={styles.onboardingWelcome}>KodKart'a Hoş Geldin! 🎉</Text>
      <Text style={styles.onboardingSubtitle}>Maceraya başlamak için lütfen uzmanlık alanını seç:</Text>

      <View style={styles.alanListesi}>
        {alanlar.map((alan: { baslik: string; detay: string; ikon: string }, index: number) => (
          <TouchableOpacity
            key={index}
            style={styles.alanBtn}
            activeOpacity={0.8}
            onPress={() => onSelectAlan(alan.baslik)}
          >
            <View style={styles.alanIkonKutusu}>
              <Text style={styles.alanIkonu}>{alan.ikon}</Text>
            </View>
            <View style={styles.alanTextKutusu}>
              <Text style={styles.alanBaslik}>{alan.baslik}</Text>
              <Text style={styles.alanDetay}>{alan.detay}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// --- Main App / Screen Export ---
export default function IndexScreen() {
  const [xp, setXp] = useState<number>(0);
  const [isMusait, setIsMusait] = useState<boolean>(true);
  const [secilenAlan, setSecilenAlan] = useState<string | null>(null);

  const handleIseAl = () => {
    setIsMusait(false);
    setXp((prev) => prev + 50);
  };

  if (!secilenAlan) {
    return (
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <OnboardingScreen onSelectAlan={(alan) => setSecilenAlan(alan)} />
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <LogoHeader />
      <ProfileCard xp={xp} isMusait={isMusait} onIseAl={handleIseAl} secilenAlan={secilenAlan} onAlanDegistir={() => setSecilenAlan(null)} />
      <BugHunter onXpChange={(val) => setXp((prev) => prev + val)} secilenAlan={secilenAlan} />
    </ScrollView>
  );
}

// --- Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#020617", // Çok koyu / profesyonel arka plan (slate-950)
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  
  /* --- Logo Header --- */
  headerContainer: {
    alignItems: "center",
    marginBottom: 35,
  },
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#38bdf8",
    marginBottom: 12,
    shadowColor: "#38bdf8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 8,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30, // matches the circle slightly smaller
    resizeMode: "cover",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#F8FAFC",
    letterSpacing: 1,
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#94a3b8",
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  /* --- Genel Elemanlar --- */
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: "100%",
    marginVertical: 18,
  },

  /* --- Profile Card --- */
  card: {
    width: "100%",
    maxWidth: 420,
    padding: 24,
    borderRadius: 24,
    borderWidth: 1.5,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
    marginBottom: 35,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "900",
    color: "#F8FAFC",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  role: {
    fontSize: 14,
    color: "#cbd5e1",
    fontWeight: "600",
  },
  xpBadge: {
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1.5,
  },
  xpValue: {
    fontSize: 22,
    fontWeight: "900",
  },
  xpLabel: {
    fontSize: 11,
    color: "#94a3b8",
    fontWeight: "800",
    marginTop: -2,
    letterSpacing: 1,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    color: "#94a3b8",
    fontSize: 15,
    fontWeight: "700",
  },
  value: {
    fontWeight: "900",
    fontSize: 17,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  statusText: {
    fontWeight: "700",
    color: "#e2e8f0",
    fontSize: 14,
  },
  hireBtn: {
    marginTop: 24,
    backgroundColor: "#F8FAFC",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#F8FAFC",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  hireBtnText: {
    color: "#020617", // slate-950
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  shareBtn: {
    marginTop: 16,
    backgroundColor: "#0077b5", // LinkedIn Mavi
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#0077b5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  shareBtnText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.5,
  },

  /* --- Onboarding / Alan Secimi --- */
  onboardingContainer: {
    width: "100%",
    maxWidth: 420,
    alignItems: "center",
    paddingTop: 20,
  },
  onboardingWelcome: {
    fontSize: 26,
    fontWeight: "900",
    color: "#F8FAFC",
    textAlign: "center",
    marginBottom: 8,
  },
  onboardingSubtitle: {
    fontSize: 15,
    color: "#cbd5e1",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "500",
  },
  alanListesi: {
    width: "100%",
    gap: 16,
    paddingBottom: 40,
  },
  alanBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f172a", // slate-900
    padding: 18,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#1e293b",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  alanIkonKutusu: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(56, 189, 248, 0.1)", // soft blue
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.2)",
  },
  alanIkonu: {
    fontSize: 22,
  },
  alanTextKutusu: {
    flex: 1,
  },
  alanBaslik: {
    fontSize: 18,
    fontWeight: "800",
    color: "#F8FAFC",
    marginBottom: 4,
  },
  alanDetay: {
    fontSize: 13,
    color: "#94a3b8",
    fontWeight: "500",
  },

  /* --- Progress Bar --- */
  progressWrapper: {
    marginTop: 5,
    marginBottom: 10,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressLabel: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "700",
  },
  progressValues: {
    fontSize: 13,
    fontWeight: "900",
  },
  progressBarBg: {
    height: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 5,
  },

  /* --- Bug Hunter --- */
  bugContainer: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#0f172a", // slate-900
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#1e293b",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 8,
  },
  bugHeaderRow: {
    flexDirection: "row",
    justifyContent: "center",
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
    color: "#F8FAFC",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#1e293b",
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
    backgroundColor: "#38bdf8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    color: "#94a3b8",
    fontWeight: "700",
    fontSize: 14,
  },
  tabTextActive: {
    color: "#0f172a",
    fontWeight: "900",
  },
  bugDivider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    width: "100%",
    marginVertical: 16,
  },
  bugContent: {
    width: "100%",
  },
  bugQuestion: {
    fontSize: 16,
    color: "#cbd5e1",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 4,
  },
  codeText: {
    color: "#D4D4D4",
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 20,
  },
  optionsContainer: {
    gap: 12,
  },
  optionBtn: {
    backgroundColor: "#1e293b", // base layer
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#334155",
  },
  optionText: {
    color: "#F8FAFC",
    fontWeight: "700",
    fontSize: 15,
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
