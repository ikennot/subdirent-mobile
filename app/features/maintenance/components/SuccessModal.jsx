import { Ionicons } from '@expo/vector-icons';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SuccessModal({ visible, onClose }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.successIconContainer}>
            <Ionicons name="checkmark-sharp" size={40} color="white" />
          </View>
          <Text style={styles.modalTitle}>SUCCESS!</Text>
          <Text style={styles.modalMessage}>Maintenance request submitted successfully!</Text>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
  },
  successIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5C6BC0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalMessage: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    fontSize: 14,
  },
  modalButton: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  modalButtonText: {
    color: '#1565C0',
    fontWeight: 'bold',
  },
});