import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

const SpecItem = ({ label, value }) => (
    <View style={styles.specItem}>
        <Text style={styles.specValue}>{value}</Text>
        <Text style={styles.specLabel}>{label}</Text>
    </View>
);

const UnitSpecifications = ({ data }) => {
  if (!data) return null;

  return (
    <View style={styles.container}>
       <Text style={styles.sectionTitle}>Unit Specifications</Text>

       <View style={styles.specsRow}>
           <SpecItem label="Floor Area" value={data.floorArea} />
           <SpecItem label="Bedrooms" value={data.bedrooms} />
           <SpecItem label="Bathrooms" value={data.bathrooms} />
           <SpecItem label="Unit Price" value={data.unitPrice} />
       </View>

       <View style={styles.descContainer}>
           <Text style={styles.descTitle}>DESCRIPTION</Text>
           <Text style={styles.descText}>
               {data.description || "No description available."}
           </Text>
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
  specsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: Colors.light.background,
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderRadius: 12,
      marginBottom: 15,
  },
  specItem: {
      alignItems: 'center',
      flex: 1,
  },
  specValue: {
      fontSize: 22,
      fontWeight: '300',
      color: Colors.light.dark,
      marginBottom: 5,
  },
  specLabel: {
      fontSize: 10,
      color: Colors.light.mediumGrey,
  },
  descContainer: {
    backgroundColor: Colors.light.background,
    padding: 15,
    borderRadius: 12,
  },
  descTitle: {
      fontSize: 12,
      fontWeight: '800',
      color: Colors.light.dark,
      marginBottom: 5,
  },
  descText: {
      fontSize: 12,
      color: Colors.light.mediumGrey,
      lineHeight: 18
  }
});

export default UnitSpecifications;