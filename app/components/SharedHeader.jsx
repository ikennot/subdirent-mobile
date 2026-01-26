import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/theme'; // Adjust path as needed

export default function CustomHeader({ title }) {
  return (
    <View style={styles.header}>
      <View style={styles.profileCircle}>
        <Text style={styles.profileInitials}>PC</Text>
      </View>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color={Colors.light.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.light.primaryDark,
    letterSpacing: 0.5,
  },
});