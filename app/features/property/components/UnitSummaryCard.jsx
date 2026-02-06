import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../../constants/theme';

const UnitSummaryCard = ({ data }) => {
  if (!data) return null;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
         {data.imageUri ? (
             <Image source={{ uri: data.imageUri }} style={styles.image} />
         ) : (
             <View style={styles.placeholderImage} />
         )}
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.unitName}>{data.name}</Text>
        <Text style={styles.subText}>{data.phase}</Text>
        <Text style={styles.subText}>Unit Code: <Text style={styles.bold}>{data.code}</Text></Text>
        <View style={styles.statusContainer}>
            <Text style={styles.subText}>Status: </Text>
            <Text style={[styles.statusText, { color: data.status === 'ACTIVE' ? Colors.light.success : Colors.light.error }]}>
                {data.status}
            </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.light.background,
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    elevation: 2, // Android shadow
    shadowColor: Colors.light.lightGrey, // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
      marginRight: 15,
  },
  placeholderImage: {
      width: 100,
      height: 100,
      backgroundColor: '#C4B5B5', // A color matching the Figma design
      borderRadius: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  detailsContainer: {
      flex: 1,
      justifyContent: 'center',
  },
  unitName: {
      fontSize: 18,
      fontWeight: '800',
      color: Colors.light.dark,
      marginBottom: 4,
  },
  subText: {
      fontSize: 14,
      color: Colors.light.mediumGrey,
      marginBottom: 4,
  },
  bold: {
      fontWeight: '700',
      color: Colors.light.dark
  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusText: {
      fontSize: 14,
      fontWeight: '800',
  }
});

export default UnitSummaryCard;