import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.brand}>ELITE</Text>
          <Text style={styles.tagline}>Learn. Build. Earn. Repeat.</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Build Africa's Tech Future</Text>
          <Text style={styles.heroSub}>Access premium tech courses from anywhere.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Categories</Text>
          <View style={styles.grid}>
            {['Web Dev', 'Mobile', 'Design', 'AI'].map(cat => (
              <View key={cat} style={styles.card}>
                <Text style={styles.cardText}>{cat}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 20 },
  header: { marginBottom: 40, alignItems: 'center' },
  brand: { fontSize: 32, fontWeight: '900', color: '#2D1B69' },
  tagline: { color: '#F59E0B', fontWeight: 'bold' },
  hero: { backgroundColor: '#2D1B69', padding: 30, borderRadius: 24, marginBottom: 30 },
  heroTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  heroSub: { color: '#EDE9FE', marginBottom: 20 },
  button: { backgroundColor: '#F59E0B', padding: 15, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  section: { marginTop: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  card: { width: '48%', backgroundColor: '#F5F3FF', padding: 20, borderRadius: 16, alignItems: 'center' },
  cardText: { fontWeight: 'bold', color: '#2D1B69' }
});
