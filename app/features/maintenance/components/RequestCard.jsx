import { StyleSheet, Text, View } from 'react-native';

export default function RequestCard({ category, status, date, statusColor }) {
  return (
    <View style={styles.requestCard}>
      <View style={[styles.statusIndicator, { backgroundColor: statusColor }]} />
      <View style={styles.requestInfo}>
        <Text style={styles.requestCategory}>CATEGORY: {category.toUpperCase()}</Text>
        <Text style={[styles.requestStatus, { color: statusColor }]}>{status}</Text>
        <Text style={styles.requestDate}>Reported: {date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  requestCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  statusIndicator: {
    width: 4,
    borderRadius: 2,
    marginRight: 10,
  },
  requestInfo: {
    flex: 1,
  },
  requestCategory: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  requestStatus: {
    fontWeight: '600',
    fontSize: 13,
    marginTop: 2,
  },
  requestDate: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
  },
});