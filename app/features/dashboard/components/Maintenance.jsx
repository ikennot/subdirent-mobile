import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

export default function Maintenance({ pendingCount = 0, inProgressCount = 0, completedCount = 0 }) {
  const theme = Colors.light;

  const Stat = ({ num, label, color }) => (
    <View style={styles.stat}>
      <Text style={[styles.num, { color }]}>{num}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stat num={pendingCount} label="Pending" color={Colors.status.warning} />
      
      <Text style={styles.arrow}>→</Text>
      
      <Stat num={inProgressCount} label="In Progress" color={theme.primaryMedium} /> 
      
      <Text style={styles.arrow}>→</Text>
      
      <Stat num={completedCount} label="Completed" color={Colors.status.success} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light.cardBg,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 16,
    marginBottom: 25,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 3,
  },
  stat: { 
    alignItems: 'center' 
},
  num: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 5 
},
  label: { 
    fontSize: 10, 
    color: Colors.light.textSecondary 
},
  arrow: { 
    color: Colors.light.textGrey, 
    fontSize: 20, 
    marginTop: -15
}
});