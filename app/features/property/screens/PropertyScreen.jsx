import { Bell } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/theme';
import { usePropertyData } from '../hooks/usePropertyData';

import ContractAndReceipt from '../components/ContractAndReceipt';
import GenericSideModal from '../components/GenericSideModal';
import UnitSpecifications from '../components/UnitSpecifications';
import UnitSummaryCard from '../components/UnitSummaryCard';

const PlaceholderSection = ({ title }) => (
    <View style={styles.placeholderContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.placeholderCard} />
    </View>
);

export default function PropertyScreen() {
  const [isContractModalVisible, setContractModalVisible] = useState(false);
  const [isReceiptModalVisible, setReceiptModalVisible] = useState(false);

  const { loading, propertyData, refetch } = usePropertyData();

  const tenantData = { name: 'Jebreil Blancada', photo: null }; 

  if (loading && !propertyData) {
    return (
        <View style={[styles.container, styles.center]}>
            <ActivityIndicator size="large" color={Colors.light.dark} />
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
        
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            <View style={styles.logoCircle}>
                {tenantData.photo ? (
                  <Image source={{ uri: tenantData.photo }} style={styles.logoImage} />
                  ) : (
                  <Text style={styles.logoText}>
                    {tenantData.name ? tenantData.name.charAt(0).toUpperCase() : 'T'}
                  </Text>
                )}
            </View>
             <Text style={styles.headerTitle}>PROPERTY</Text>
          </View>
          
          <TouchableOpacity style={styles.notifBtn}>
             <Bell size={20} color={Colors.light.dark} />
             <Text style={styles.notifLabel}>Notification</Text>
          </TouchableOpacity>
        </View>

        {propertyData && (
            <>
                <UnitSummaryCard data={propertyData.unit} />
                
                <UnitSpecifications data={propertyData.specs} />
                
                <ContractAndReceipt 
                    data={propertyData.contract}
                    onOpenContractBtn={() => setContractModalVisible(true)}
                    onOpenReceiptsBtn={() => setReceiptModalVisible(true)}
                />
                
                <PlaceholderSection title="Amenities" />
                <PlaceholderSection title="Unit Price Prediction" />
            </>
        )}

      </ScrollView>

      <GenericSideModal 
        visible={isContractModalVisible} 
        onClose={() => setContractModalVisible(false)}
        title="Contract File"
      >
          <Text style={{color: Colors.light.mediumGrey}}>Contract document content goes here.</Text>
      </GenericSideModal>

      <GenericSideModal 
        visible={isReceiptModalVisible} 
        onClose={() => setReceiptModalVisible(false)}
        title="All Receipts"
      >
          <Text style={{color: Colors.light.mediumGrey}}>List of receipts goes here.</Text>
      </GenericSideModal>

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
  logoImage: { 
      width: 40, 
      height: 40, 
      borderRadius: 20 
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
  // Styles for placeholders
  placeholderContainer: {
      marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.dark,
    marginBottom: 15,
  },
  placeholderCard: {
      height: 100,
      backgroundColor: Colors.light.background,
      borderRadius: 12,
  }
});