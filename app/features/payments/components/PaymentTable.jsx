import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

export default function PaymentTable({ payments = [] }) {
  return (
    <View style={styles.tableCard}>
      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.colHeader, { flex: 2 }]}>DESCRIPTION</Text>
        <Text style={[styles.colHeader, { flex: 1.5 }]}>DATE PAID</Text>
        <Text style={[styles.colHeader, { flex: 1.5 }]}>AMOUNT</Text>
        <Text style={[styles.colHeader, { flex: 1, textAlign: 'right' }]}>INVOICE</Text>
      </View>

      {/* Table Body */}
      <View style={styles.tableBody}>
        {payments.length > 0 ? (
          payments.map((item) => (
            <Text key={item.id}>{item.desc}</Text>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="trash-outline" size={20} color="#ccc" />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tableCard: {
    backgroundColor: '#EAF8FF',
    borderRadius: 10,
    padding: 15,
    minHeight: 100,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  colHeader: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.light.primaryDark,
  },
  tableBody: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  emptyContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
});