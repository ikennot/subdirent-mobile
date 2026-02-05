import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

export default function AutoPayCard({ cardDetails, setCardDetails }) {
  return (
    <View style={styles.autoPayCard}>
      <Text style={styles.autoPayDesc}>
        Set up Autopay using your card to automatically pay your monthly rent on the due date.
      </Text>

      <Text style={styles.inputLabel}>CARD DETAILS</Text>
      <TextInput
        style={styles.input}
        value={cardDetails}
        onChangeText={setCardDetails}
      />

      <TouchableOpacity style={styles.activateBtn}>
        <Ionicons name="radio-button-on" size={12} color="white" style={{marginRight:5}} />
        <Text style={styles.activateText}>ACTIVATE AUTOPAY</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  autoPayCard: {
    backgroundColor: '#EAF8FF',
    borderRadius: 12,
    padding: 15,
  },
  autoPayDesc: {
    fontSize: 10,
    color: Colors.light.textSecondary,
    marginBottom: 15,
    lineHeight: 14,
  },
  inputLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.light.primaryDark,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F5F9FC',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CEDBE5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 35,
    marginBottom: 10,
  },
  activateBtn: {
    backgroundColor: '#00E676',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
  },
  activateText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
});