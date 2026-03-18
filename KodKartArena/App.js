import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';

const MAX_ENERGY = 100;
const WORK_COST = 20;
const COFFEE_BOOST = 30;

const getLevelInfo = (xp) => {
  if (xp >= 250) return { title: 'Senior', max: 500, color: '#f59e0b', icon: '🥇' };
  if (xp >= 100) return { title: 'Mid-Level', max: 250, color: '#a78bfa', icon: '🥈' };
  return { title: 'Junior', max: 100, color: '#38bdf8', icon: '🥉' };
};

const ProgressBar = ({ label, current, max, color, isEnergy = false }) => {
  const percentage = Math.min((current / max) * 100, 100);
  
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressHeader}>
        <Text style={styles.progressLabel}>{label}</Text>
        <Text style={[styles.progressValue, { color }]}>
          {current} / {max} {isEnergy ? '⚡' : 'XP'}
        </Text>
      </View>
      <View style={styles.progressBarBg}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${percentage}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
};

export default function App() {
  const [xp, setXp] = useState(0);
  const [energy, setEnergy] = useState(MAX_ENERGY);
  const [isWorking, setIsWorking] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));

  const levelInfo = getLevelInfo(xp);
  
  const statusColor = isWorking ? '#ef4444' : '#22c55e';
  const statusText = isWorking ? 'Projeye Odaklanmış Durumda' : 'Yeni Fırsatlara Açık (Müsait)';

  const handleWork = () => {
    if (energy >= WORK_COST && !isWorking) {
      setIsWorking(true);
      setEnergy((prev) => prev - WORK_COST);
      
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0.8, duration: 150, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
      ]).start();

      setTimeout(() => {
        setXp((prev) => prev + 35);
        setIsWorking(false);
      }, 1500);
    }
  };

  const handleCoffee = () => {
    setEnergy((prev) => Math.min(prev + COFFEE_BOOST, MAX_ENERGY));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>KodKart Arena</Text>
        <Text style={styles.headerSubtitle}>Geliştirici Profilin</Text>
      </View>

      <Animated.View style={[
        styles.card, 
        { 
          borderColor: levelInfo.color, 
          shadowColor: levelInfo.color,
          opacity: fadeAnim 
        }
      ]}>
        <View style={styles.cardHeaderRow}>
          <View>
            <Text style={styles.name}>Mert Şahin</Text>
            <Text style={styles.role}>React Native Developer ⚛️</Text>
          </View>
          <View style={[styles.xpBadge, { borderColor: levelInfo.color }]}>
            <Text style={[styles.xpValue, { color: levelInfo.color }]}>{xp}</Text>
            <Text style={styles.xpLabel}>XP</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>Mevcut Unvan</Text>
          <Text style={[styles.value, { color: levelInfo.color }]}>
            {levelInfo.title} {levelInfo.icon}
          </Text>
        </View>

        <View style={styles.statusRow}>
          <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
          <Text style={[styles.statusText, { color: statusColor }]}>{statusText}</Text>
        </View>

        <View style={styles.barsContainer}>
          <ProgressBar 
            label="Sonraki Unvan" 
            current={xp} 
            max={levelInfo.max} 
            color={levelInfo.color} 
          />
          <ProgressBar 
            label="Enerji Seviyesi" 
            current={energy} 
            max={MAX_ENERGY} 
            color={energy < WORK_COST ? '#ef4444' : '#eab308'} 
            isEnergy={true}
          />
        </View>
      </Animated.View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={[styles.actionBtn, styles.workBtn, (energy < WORK_COST || isWorking) && styles.disabledBtn]} 
          activeOpacity={0.8}
          onPress={handleWork}
          disabled={energy < WORK_COST || isWorking}
        >
          <Text style={styles.actionBtnText}>
            {isWorking ? '💻 Kod Yazılıyor...' : '🚀 İşe Al / Çalış (-20 ⚡)'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionBtn, styles.coffeeBtn, energy === MAX_ENERGY && styles.disabledBtn]} 
          activeOpacity={0.8}
          onPress={handleCoffee}
          disabled={energy === MAX_ENERGY}
        >
          <Text style={styles.actionBtnText}>☕ Kahve İç (+30 ⚡)</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#0f172a',
    padding: 24,
    borderRadius: 24,
    borderWidth: 1.5,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 30,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#cbd5e1',
    fontWeight: '600',
  },
  xpBadge: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  xpValue: {
    fontSize: 22,
    fontWeight: '900',
  },
  xpLabel: {
    fontSize: 11,
    color: '#94a3b8',
    fontWeight: '800',
    marginTop: -2,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    color: '#94a3b8',
    fontSize: 15,
    fontWeight: '700',
  },
  value: {
    fontWeight: '900',
    fontSize: 16,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  statusText: {
    color: '#22c55e',
    fontWeight: '700',
    fontSize: 13,
  },
  barsContainer: {
    marginTop: 20,
    gap: 15,
  },
  progressContainer: {
    width: '100%',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    color: '#94a3b8',
    fontSize: 13,
    fontWeight: '700',
  },
  progressValue: {
    fontSize: 13,
    fontWeight: '900',
  },
  progressBarBg: {
    height: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  actionsContainer: {
    width: '100%',
    maxWidth: 400,
    gap: 15,
  },
  actionBtn: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  workBtn: {
    backgroundColor: '#38bdf8',
    shadowColor: '#38bdf8',
  },
  coffeeBtn: {
    backgroundColor: '#a16207',
    shadowColor: '#a16207',
  },
  disabledBtn: {
    backgroundColor: '#1e293b',
    borderColor: '#334155',
  },
  actionBtnText: {
    color: '#F8FAFC',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
