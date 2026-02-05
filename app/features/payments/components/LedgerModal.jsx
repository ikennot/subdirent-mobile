import { Ionicons } from '@expo/vector-icons';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

export default function LedgerModal({ visible, onClose }) {
  // Mock Data
  const ledgerData = [];

  return (
    <Modal
      animationType="fade" // Changed to fade for a smoother "popup" feel
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {/* 1. OUTER LAYER: Clicking here closes the modal */}
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        {/* 2. INNER LAYER: Clicking here stops the close action */}
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalContainer}
          onPress={(e) => e.stopPropagation()}
        >

          {/* Modal Header */}
          <View style={styles.header}>
            <Text style={styles.title}>FULL ACCOUNT LEDGER</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={Colors.light.text} />
            </TouchableOpacity>
          </View>

          {/* Table Headers */}
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.columnHeader, { flex: 1 }]}>DATE PAID</Text>
            <Text style={[styles.columnHeader, { flex: 1.5 }]}>BILLING MONTH</Text>
            <Text style={[styles.columnHeader, { flex: 1 }]}>REFERENCE</Text>
            <Text style={[styles.columnHeader, { flex: 1, textAlign: 'right' }]}>AMOUNT</Text>
          </View>

          {/* Table Content */}
          <View style={styles.tableContent}>
            {ledgerData.length > 0 ? (
              <FlatList
                data={ledgerData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.row}>
                    <Text style={[styles.cellText, { flex: 1 }]}>{item.date}</Text>
                    <Text style={[styles.cellText, { flex: 1.5 }]}>{item.month}</Text>
                    <Text style={[styles.cellText, { flex: 1 }]}>{item.ref}</Text>
                    <Text style={[styles.cellText, { flex: 1, textAlign: 'right' }]}>{item.amount}</Text>
                  </View>
                )}
              />
            ) : (
              <View style={styles.emptyState}>
                <Ionicons name="document-text-outline" size={40} color="#ccc" />
                <Text style={styles.emptyText}>No transaction history available</Text>
              </View>
            )}
          </View>

        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    maxHeight: '80%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.light.primaryDark,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#EAF8FF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  columnHeader: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.light.primaryDark,
  },
  tableContent: {
    minHeight: 200,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cellText: {
    fontSize: 11,
    color: Colors.light.textSecondary,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 12,
    color: '#999',
  }
});