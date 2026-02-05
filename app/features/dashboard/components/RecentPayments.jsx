import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

export default function RecentPayments({ data = [] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Payments & Invoices</Text>
      
      <View style={styles.headerRow}>
        <Text style={[styles.headerText, { flex: 3 }]}>DESCRIPTION</Text>
        <Text style={[styles.headerText, { flex: 2, textAlign: 'center' }]}>AMOUNT</Text>
        <Text style={[styles.headerText, { flex: 2, textAlign: 'center' }]}>DATE PAID</Text>
        <Text style={[styles.headerText, { flex: 2, textAlign: 'right' }]}>MONTH</Text>
      </View>

      {data.length === 0 ? (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No recent payments found.</Text>
        </View>
      ) : (
        data.map((item, index) => (
          <View key={item.id || index} style={[styles.row, index % 2 !== 0 && styles.altRow]}>
            <Text style={[styles.cellText, { flex: 3 }]} numberOfLines={1}>{item.description}</Text>
            <Text style={[styles.cellText, { flex: 2, textAlign: 'center', fontWeight: 'bold' }]}>
              ₱{item.amount.toLocaleString()}
            </Text>
            <Text style={[styles.cellText, { flex: 2, textAlign: 'center' }]}>{item.date_paid}</Text>
            <Text style={[styles.cellText, { flex: 2, textAlign: 'right' }]}>{item.month}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: Colors.light.cardBg,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  title: {
    fontSize: 14,
    color: Colors.light.mediumGrey,
    margin: 15,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: Colors.light.cardBgSecondary,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 9,
    fontWeight: '900',
    color: Colors.light.primaryMedium,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: Colors.light.cardBg,
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.divider,
  },
  altRow: {
    backgroundColor: Colors.light.overlay,
  },
  cellText: {
    fontSize: 10,
    color: Colors.light.dark,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: Colors.light.extraLightGrey,
    fontStyle: 'italic',
    fontSize: 12
  }
});