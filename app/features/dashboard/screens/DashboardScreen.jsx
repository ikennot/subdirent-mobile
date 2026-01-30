import { Bell } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import { useDashboardData } from '../hooks/useDashboardData';

// Components
import CalendarCard from '../components/CalendarCard';
import Maintenance from '../components/Maintenance';
import NotificationModal from '../components/NotificationModal';
import RecentPayments from '../components/RecentPayments';
import TenantCard from '../components/TenantCard';
import Maintenance from '../components/Maintenance';


export default function DashboardScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { 
    loading, 
    tenantData, 
    maintenanceData, 
    payments, 
    recentPayments, 
    maintenanceEvents, 
    notifications, 
    refetch 
  } = useDashboardData(selectedDate);

  // Resolve tenant photo URI coming from the API
  const resolvePhotoUri = (photo) => {
    if (!photo) return null;
    if (photo.startsWith('http')) return photo;
    const base = 'https://subdirent.bscs3a.com';
    if (photo.startsWith('/')) return `${base}${photo}`;
    if (photo.startsWith('storage')) return `${base}/${photo}`;
    return `${base}/storage/${photo}`;
  };

  const tenantPhotoUri = resolvePhotoUri(tenantData?.photo);

  // Initial Full Loader
  if (loading && !tenantData) {
    return (
        <View style={[styles.container, styles.center]}>
            <ActivityIndicator size="large" color="#000" />
        </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
        showsVerticalScrollIndicator={false}
      >
        
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            {tenantData && (
              <View style={styles.logoCircle}>
                {tenantPhotoUri ? (
                  <Image
                    source={{ uri: tenantPhotoUri }}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                  ) : (
                  <Text style={styles.logoText}>
                    {tenantData.name ? tenantData.name.charAt(0).toUpperCase() : 'T'}
                  </Text>
                )}
              </View>
            )}
             <Text style={styles.headerTitle}>DASHBOARD</Text>
          </View>
          
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.notifBtn}>
             <Bell size={20} color="#333" />
             <Text style={styles.notifLabel}>Notification</Text>
             {notifications.length > 0 && <View style={styles.redDot} />}
          </TouchableOpacity>
        </View>

        {/* TENANT CARD */}
        {tenantData && (
          <TenantCard 
            tenantName={tenantData.name} 
            propertyAddress={tenantData.address} 
          />
        )}

        {/* MAINTENANCE TASKS */}
        <Text style={styles.sectionTitle}>Maintenance Tasks</Text>
        <Maintenance 
            pendingCount={maintenanceData.pending} 
            inProgressCount={maintenanceData.inProgress} 
            completedCount={maintenanceData.completed} 
        />

        {/* CALENDAR */}
        <Text style={styles.sectionTitle}>Payment Schedule</Text>
        <CalendarCard 
            currentDate={selectedDate} 
            onDateChange={setSelectedDate} 
            paymentData={payments} 
            maintenanceEvents={maintenanceEvents} 
            isLoading={loading}
        />

        {/* RECENT PAYMENTS TABLE */}
        <RecentPayments data={recentPayments} />
        
      </ScrollView>

      <NotificationModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        notifications={notifications} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.light.overlay 
  }, 
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingTop: 10,
    marginBottom: 20,
  },
  brandContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  logoCircle: {
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: Colors.light.dark, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 12
  },
  logoText: { 
    color: Colors.light.background, 
    fontSize: 12, 
    fontWeight: 'bold' 
  },
  headerTitle: { 
    fontSize: 16, 
    fontWeight: '800', 
    color: Colors.light.dark, 
    letterSpacing: 0.5 
  },
  notifBtn: { 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  notifLabel: { 
    fontSize: 8, 
    color: Colors.light.lightGrey, 
    marginTop: 2 
  },
  redDot: { 
    position: 'absolute', 
    top: 0, 
    right: 5, 
    width: 8, 
    height: 8, 
    borderWidth: 1, 
    borderColor: Colors.light.background 
  },
  sectionTitle: { 
    fontSize: 14, 
    color: Colors.light.mediumGrey, 
    marginBottom: 10, 
    marginTop: 10,
    marginLeft: 4 
  },
});