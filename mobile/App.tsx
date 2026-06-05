import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from './src/theme/theme';
import { DashboardScreen } from './src/screens/DashboardScreen';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulate Auth state

  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.welcome}>
          <Text style={styles.brand}>ELITE</Text>
          <Text style={styles.tagline}>BY EL VERSE</Text>
          <View style={styles.hero}>
            <Text style={styles.heroTitle}>Build Africa's Tech Future</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsAuthenticated(true)}
            >
              <Text style={styles.buttonText}>Start Learning Free</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <DashboardScreen />

      {/* Mini Bottom Nav Mockup */}
      <View style={styles.tabBar}>
        {['Home', 'Courses', 'Wallet', 'Profile'].map((tab, i) => (
          <TouchableOpacity key={tab} style={styles.tabItem}>
            <View style={[styles.tabIcon, i === 0 && styles.tabIconActive]} />
            <Text style={[styles.tabText, i === 0 && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  welcome: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  brand: { fontSize: 40, fontWeight: '900', color: colors.primary, letterSpacing: -2 },
  tagline: { color: colors.accent, fontWeight: 'bold', letterSpacing: 4, marginBottom: 40 },
  hero: { width: '100%', backgroundColor: colors.primary, padding: 40, borderRadius: 32, alignItems: 'center' },
  heroTitle: { color: colors.white, fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  button: { backgroundColor: colors.accent, paddingVertical: 16, paddingHorizontal: 32, borderRadius: 16 },
  buttonText: { color: colors.white, fontWeight: 'bold', fontSize: 16 },
  tabBar: { height: 70, backgroundColor: colors.white, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#00000010', paddingBottom: 10 },
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabIcon: { width: 24, height: 24, borderRadius: 6, backgroundColor: colors.text.secondary + '30', marginBottom: 4 },
  tabIconActive: { backgroundColor: colors.primary },
  tabText: { fontSize: 10, color: colors.text.secondary, fontWeight: 'medium' },
  tabTextActive: { color: colors.primary, fontWeight: 'bold' }
});
