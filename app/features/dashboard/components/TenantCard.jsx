import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../constants/theme';
import { useButtonAnimation } from '../../../features/auth/hooks/useButtonAnimation';

import houseImage from '../../../../assets/images/dashboard house.png';

export default function TenantCard({ tenantName, propertyAddress, onpress }) {
  const { buttonOpacity, pressIn, pressOut } = useButtonAnimation();
  const theme = Colors.light; 

  return (
    <View style={styles.card}>
      <Text style={styles.label}>{tenantName}</Text>
      
      <View style={styles.row}>
        <Text style={styles.address}>{propertyAddress}</Text>
        <Image source={houseImage} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
      </View>

      <Animated.View style={{ opacity: buttonOpacity }}>
        <TouchableOpacity 
          style={styles.btn} 
          onPress={onpress}
          onPressIn={pressIn}
          onPressOut={pressOut}
          activeOpacity={1}
        >
          <Text style={styles.btnText}>View Property</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.cardBgSecondary, 
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#B8A0A0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.light.text,
    textTransform: 'uppercase'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  address: {
    fontSize: 16,
    color: Colors.light.textSecondary
  },
  btn: {
    backgroundColor: Colors.light.primaryLight, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start'
  },
  btnText: {
    color: Colors.light.buttonText,
    fontWeight: '600',
    fontSize: 12
  }
});