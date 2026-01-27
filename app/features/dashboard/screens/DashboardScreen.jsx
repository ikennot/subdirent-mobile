import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';

// Components
import CalendarCard from '../components/CalendarCard';
import TenantCard from '../components/TenantCard';
import Maintenance from '../components/Maintenance';

// Assets
import notifImage from '../../../../assets/images/notification.png';
import profileImage from '../../../../assets/images/test-account (gray).png';

export default function DashboardScreen() {
  const theme = Colors.light;
  
  // Dynamic Data
  const tenantData = {
    name: "Jorejj Kalbo",
    address: "Suburban House, Phase 1"
  };

  const maintenanceData = {
    pending: 0,
    inProgress: 0,
    completed: 0
  };

  const currentMonthPayments = [
    { day: 9, amount: 0, status: 'paid' },
    { day: 13, amount: 0, status: 'paid' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image source={profileImage} style={styles.avatar} />
            <Text style={styles.headerTitle}>DASHBOARD</Text>
          </View>
          
          <TouchableOpacity style={styles.notifBtn}>
            <Image source={notifImage} style={{ width: 24, height: 24, tintColor: theme.icon }} />
            <Text style={styles.notifText}>Notification</Text>
          </TouchableOpacity>
        </View>

        {/* Tenant Card */}
        <TenantCard
            tenantName={tenantData.name}
            propertyAddress={tenantData.address}
            onpress={() => console.log('View Property')}
        />

        {/* Maintenance */}
        <Text style={styles.sectionTitle}>Maintenance Tasks</Text>
        <Maintenance
            pendingCount={maintenanceData.pending}
            inProgressCount={maintenanceData.inProgress}
            completedCount={maintenanceData.completed}
        />

        {/* Calendar */}
        <Text style={styles.sectionTitle}>Payment Schedule</Text>
        <CalendarCard paymentData={currentMonthPayments} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: Colors.light.background 
  },
  scrollContent: { 
    padding: 20, 
    paddingBottom: 50 
},
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 25, 
    marginTop: 10 
},
  userInfo: { 
    flexDirection: 'row', 
    alignItems: 'center' 
},
  avatar: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    marginRight: 10 
},
  headerTitle: { 
    fontSize: 18, 
    fontWeight: '900', 
    color: Colors.light.text, 
    letterSpacing: 0.5 
},
  notifBtn: { 
    alignItems: 'center' 
},
  notifText: { 
    fontSize: 8, 
    color: Colors.light.textSecondary, 
    marginTop: 2 },
  sectionTitle: { 
    fontSize: 16, 
    color: Colors.light.textSecondary, 
    marginBottom: 15, 
    marginTop: 5 
},
});