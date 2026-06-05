import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors, spacing } from '../theme/theme';

export const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, David! 👋</Text>
          <Text style={styles.subGreeting}>Ready to build today?</Text>
        </View>
        <View style={styles.streakContainer}>
          <Text style={styles.streakText}>🔥 12</Text>
        </View>
      </View>

      {/* XP Progress */}
      <View style={styles.xpCard}>
        <View style={styles.xpInfo}>
          <Text style={styles.xpLevel}>Level 4</Text>
          <Text style={styles.xpValue}>2,450 / 3,000 XP</Text>
        </View>
        <View style={styles.xpBar}>
          <View style={[styles.xpProgress, { width: '75%' }]} />
        </View>
      </View>

      {/* Resume Course */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Learning</Text>
        <TouchableOpacity style={styles.resumeCard}>
          <View style={styles.resumeInfo}>
            <Text style={styles.courseTitle}>Full Stack Next.js</Text>
            <Text style={styles.lessonTitle}>Lesson 4: Server Actions</Text>
            <View style={styles.progressContainer}>
               <View style={[styles.progressBar, { width: '45%' }]} />
               <Text style={styles.progressText}>45%</Text>
            </View>
          </View>
          <View style={styles.playButton}>
             <Text style={styles.playIcon}>▶</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* My Courses */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Courses</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.courseScroll}>
          {[1, 2, 3].map(i => (
            <TouchableOpacity key={i} style={styles.courseCard}>
              <View style={styles.courseThumb} />
              <Text style={styles.miniCourseTitle} numberOfLines={2}>Advanced UI/UX with Figma</Text>
              <Text style={styles.miniCourseAuthor}>Sarah Konate</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg, marginTop: spacing.md },
  greeting: { fontSize: 24, fontWeight: 'bold', color: colors.primary },
  subGreeting: { color: colors.text.secondary, fontSize: 14 },
  streakContainer: { backgroundColor: colors.accent + '20', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  streakText: { color: colors.accent, fontWeight: 'bold' },
  xpCard: { backgroundColor: colors.white, padding: spacing.md, borderRadius: 20, marginBottom: spacing.lg, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
  xpInfo: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  xpLevel: { fontWeight: 'bold', color: colors.primary },
  xpValue: { fontSize: 12, color: colors.text.secondary },
  xpBar: { height: 8, backgroundColor: colors.background, borderRadius: 4, overflow: 'hidden' },
  xpProgress: { height: '100%', backgroundColor: colors.primary },
  section: { marginBottom: spacing.lg },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.primary, marginBottom: spacing.sm },
  seeAll: { color: colors.accent, fontSize: 12, fontWeight: 'bold' },
  resumeCard: { backgroundColor: colors.primary, borderRadius: 20, padding: spacing.md, flexDirection: 'row', alignItems: 'center' },
  resumeInfo: { flex: 1 },
  courseTitle: { color: colors.white, fontWeight: 'bold', fontSize: 16 },
  lessonTitle: { color: colors.text.light, fontSize: 12, marginTop: 2 },
  progressContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 10 },
  progressBar: { height: 4, backgroundColor: colors.accent, borderRadius: 2 },
  progressText: { color: colors.white, fontSize: 10, fontWeight: 'bold' },
  playButton: { width: 40, height: 40, backgroundColor: colors.white, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: spacing.md },
  playIcon: { color: colors.primary, fontSize: 18 },
  courseScroll: { marginHorizontal: -spacing.md, paddingHorizontal: spacing.md },
  courseCard: { width: 160, backgroundColor: colors.white, borderRadius: 16, padding: spacing.sm, marginRight: spacing.md },
  courseThumb: { width: '100%', height: 90, backgroundColor: colors.primary + '10', borderRadius: 12, marginBottom: spacing.sm },
  miniCourseTitle: { fontSize: 13, fontWeight: 'bold', color: colors.primary, marginBottom: 2 },
  miniCourseAuthor: { fontSize: 11, color: colors.text.secondary },
});
