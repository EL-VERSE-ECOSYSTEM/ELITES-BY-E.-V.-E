import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const COLORS = {
  primary: '#0F0728', // Royal Indigo 950
  accent: '#F59E0B',  // African Gold 500
  secondary: '#8B5CF6',
  white: '#FFFFFF',
  gray: '#F3F4F6',
  textGray: '#6B7280',
  success: '#10B981',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [userRole, setUserRole] = useState('Learner'); // Learner, Tutor, Admin

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>ELITE</Text>
          <Text style={styles.roleTag}>{userRole} View</Text>
        </View>
        <TouchableOpacity style={styles.profileCircle}>
          <Text style={styles.profileText}>SK</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Wallet Overview Component */}
        <View style={styles.walletCard}>
          <Text style={styles.walletLabel}>CURRENT BALANCE</Text>
          <Text style={styles.walletAmount}>$1,250.00</Text>
          <View style={styles.walletActions}>
            <TouchableOpacity style={styles.withdrawBtn}>
              <Text style={styles.withdrawBtnText}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.depositBtn}>
              <Text style={styles.depositBtnText}>Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dynamic Content based on User Role */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {userRole === 'Learner' ? 'Enrolled Courses' : 'Tutor Dashboard'}
            </Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {[1, 2, 3].map(i => (
              <View key={i} style={styles.courseCard}>
                <View style={styles.courseThumb} />
                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle}>Advanced Next.js 15</Text>
                  <View style={styles.progressContainer}>
                    <View style={[styles.progressBar, { width: '65%' }]} />
                  </View>
                  <Text style={styles.progressText}>65% Complete</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Promotions/Activity Feed */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Promotions</Text>
          <View style={styles.promotionCard}>
            <View style={styles.promoIcon}>
              <Text>🚀</Text>
            </View>
            <View style={styles.promoDetails}>
              <Text style={styles.promoTitle}>Promoted to EL CODERS</Text>
              <Text style={styles.promoSub}>By Tutor Dr. Smith</Text>
            </View>
            <TouchableOpacity style={styles.promoAction}>
              <Text style={styles.promoActionText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Messaging Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Messages</Text>
          {[1, 2].map(i => (
            <TouchableOpacity key={i} style={styles.msgItem}>
              <View style={styles.msgAvatar} />
              <View style={styles.msgContent}>
                <Text style={styles.msgName}>Dr. Smith</Text>
                <Text style={styles.msgText} numberOfLines={1}>How is the project going?</Text>
              </View>
              <View style={styles.msgMeta}>
                <Text style={styles.msgTime}>10:30</Text>
                <View style={styles.msgUnread}><Text style={styles.unreadText}>2</Text></View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Tab Navigation */}
      <View style={styles.bottomNav}>
        {['Home', 'Wallet', 'Messages', 'Settings'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.navTab}
          >
            <View style={[styles.navIcon, activeTab === tab && styles.navIconActive]} />
            <Text style={[styles.navText, activeTab === tab && styles.navTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50
  },
  brand: { fontSize: 24, fontWeight: '900', color: COLORS.white, letterSpacing: -1 },
  roleTag: { color: COLORS.accent, fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' },
  profileCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.accent, alignItems: 'center', justifyContent: 'center' },
  profileText: { color: COLORS.white, fontWeight: 'bold' },

  scroll: { padding: 20, pb: 100 },
  walletCard: {
    backgroundColor: COLORS.primary,
    padding: 25,
    borderRadius: 24,
    marginBottom: 30,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10
  },
  walletLabel: { color: COLORS.textGray, fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  walletAmount: { color: COLORS.white, fontSize: 36, fontWeight: 'bold', marginVertical: 10 },
  walletActions: { flexDirection: 'row', gap: 10, marginTop: 10 },
  withdrawBtn: { backgroundColor: COLORS.accent, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 },
  withdrawBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 12 },
  depositBtn: { backgroundColor: 'rgba(255,255,255,0.1)', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 },
  depositBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 12 },

  section: { marginBottom: 30 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary },
  seeAll: { color: COLORS.secondary, fontSize: 12, fontWeight: 'bold' },

  horizontalScroll: { marginHorizontal: -20, paddingHorizontal: 20 },
  courseCard: { width: width * 0.6, marginRight: 15, backgroundColor: COLORS.white, borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
  courseThumb: { height: 100, backgroundColor: COLORS.gray },
  courseInfo: { padding: 15 },
  courseTitle: { fontWeight: 'bold', fontSize: 14, marginBottom: 10 },
  progressContainer: { height: 6, backgroundColor: COLORS.gray, borderRadius: 3, marginBottom: 5 },
  progressBar: { height: '100%', backgroundColor: COLORS.secondary, borderRadius: 3 },
  progressText: { fontSize: 10, color: COLORS.textGray },

  promotionCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: 15, borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
  promoIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: COLORS.gray, alignItems: 'center', justifyContent: 'center' },
  promoDetails: { flex: 1, marginLeft: 15 },
  promoTitle: { fontWeight: 'bold', fontSize: 14 },
  promoSub: { fontSize: 10, color: COLORS.textGray },
  promoAction: { backgroundColor: COLORS.primary, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 10 },
  promoActionText: { color: COLORS.white, fontSize: 10, fontWeight: 'bold' },

  msgItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, backgroundColor: COLORS.white, padding: 12, borderRadius: 16 },
  msgAvatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.gray },
  msgContent: { flex: 1, marginLeft: 12 },
  msgName: { fontWeight: 'bold', fontSize: 14 },
  msgText: { fontSize: 12, color: COLORS.textGray },
  msgMeta: { alignItems: 'flex-end' },
  msgTime: { fontSize: 10, color: COLORS.textGray, marginBottom: 5 },
  msgUnread: { backgroundColor: COLORS.accent, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10 },
  unreadText: { color: COLORS.white, fontSize: 10, fontWeight: 'bold' },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
    paddingBottom: 20
  },
  navTab: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  navIcon: { width: 24, height: 24, backgroundColor: COLORS.gray, borderRadius: 6, marginBottom: 5 },
  navIconActive: { backgroundColor: COLORS.accent },
  navText: { fontSize: 10, color: COLORS.textGray, fontWeight: '500' },
  navTextActive: { color: COLORS.primary, fontWeight: 'bold' }
});
