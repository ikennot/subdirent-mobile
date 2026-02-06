import { FileText } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

const ContractAndReceipt = ({ data, onOpenContractBtn, onOpenReceiptsBtn }) => {
  if (!data) return null;

  return (
    <View style={styles.container}>
       <Text style={styles.sectionTitle}>Contract and Receipt</Text>
       
       <View style={styles.card}>
           <View style={styles.durationContainer}>
                <FileText size={18} color={Colors.light.mediumGrey} style={{marginRight: 8}} />
                <Text style={styles.durationText}>
                    Contract Duration: <Text style={styles.bold}>{data.duration}</Text>
                </Text>
           </View>

           <View style={styles.btnRow}>
               {data.hasContractFile ? (
                    <TouchableOpacity style={styles.viewBtn} onPress={onOpenContractBtn}>
                        <Text style={styles.viewBtnText}>View Contract</Text>
                    </TouchableOpacity>
               ) : (
                    <TouchableOpacity style={styles.noContractBtn} disabled={true}>
                         <Text style={styles.noContractText}>No Contract File</Text>
                    </TouchableOpacity>
               )}

                {/* Receipts Button */}
               <TouchableOpacity style={styles.viewBtn} onPress={onOpenReceiptsBtn}>
                    <Text style={styles.viewBtnText}>View Receipts</Text>
               </TouchableOpacity>
           </View>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.dark,
    marginBottom: 15,
  },
  card: {
    backgroundColor: Colors.light.background,
    borderRadius: 12,
    padding: 15,
  },
  durationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
  },
  durationText: {
      fontSize: 14,
      color: Colors.light.mediumGrey,
  },
  bold: {
      fontWeight: '700',
      color: '#F5A623', 
  },
  btnRow: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  noContractBtn: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: Colors.light.error,
      borderRadius: 20,
      marginRight: 10,
  },
  noContractText: {
      fontSize: 12,
      color: Colors.light.error,
      fontWeight: '600'
  },
  viewBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.light.background,
    borderRadius: 20,
    marginRight: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  viewBtnText: {
      fontSize: 12,
      color: Colors.light.dark,
      fontWeight: '600'
  }
});

export default ContractAndReceipt;