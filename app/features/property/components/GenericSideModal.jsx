import { X } from 'lucide-react-native';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../constants/theme';
    
const GenericSideModal = ({ visible, onClose, title, children }) => {
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
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
               <X size={24} color={Colors.light.dark} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.content}>
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end', // Aligns the modal to the right
  },
  modalContainer: {
    width: '85%', // Occupy most of the screen width
    height: '96%', // Almost full height
    backgroundColor: Colors.light.background,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    marginRight: '2%', // A small margin from the right edge
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.light.dark,
    textTransform: 'uppercase',
  },
  closeBtn: {
      padding: 5,
  },
  content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1, 
      borderColor: Colors.light.lightGrey, 
      borderStyle: 'dashed',
  }
});

export default GenericSideModal;