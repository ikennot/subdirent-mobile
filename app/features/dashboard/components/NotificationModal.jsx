import { X } from 'lucide-react-native';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

export default function NotificationModal({ visible, onClose, notifications }) {
  const theme = Colors.light;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          
          <View style={styles.header}>
            <Text style={styles.title}>Notifications</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <X size={20} color={theme.text} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListEmptyComponent={
                <Text style={styles.emptyText}>No new notifications</Text>
            }
            renderItem={({ item }) => (
              <View style={styles.notifItem}>
                <View style={styles.notifHeader}>
                  <Text style={styles.notifTitle}>{item.title}</Text>
                  <Text style={styles.notifDate}>{item.date}</Text>
                </View>
                <Text style={styles.notifMessage}>{item.message}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: Colors.light.cardBg,
    borderRadius: 20,
    padding: 20,
    maxHeight: '70%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.cardBgSecondary,
    paddingBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.light.text,
  },
  closeBtn: {
    padding: 5,
    backgroundColor: Colors.light.background,
    borderRadius: 20
  },
  notifItem: {
    backgroundColor: Colors.light.background,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },
  notifHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  notifTitle: {
    fontWeight: '700',
    fontSize: 14,
    color: Colors.light.primaryDark,
  },
  notifDate: {
    fontSize: 11,
    color: Colors.light.textGrey,
  },
  notifMessage: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    lineHeight: 18,
  },
  emptyText: {
    textAlign: 'center',
    color: Colors.light.textGrey,
    marginTop: 20
  }
});