import  {View, StyleSheet,Image,Text,Pressable} from "react-native";
import Modules from "./buttons/Modules";
import Dashboard from '../../../assets/navigation-assets/dashboard.png';
import Property from '../../../assets/navigation-assets/property.png';
import Payments from '../../../assets/navigation-assets/money.png';
import Maintenance from '../../../assets/navigation-assets/maintenance.png';
import Profile from '../../../assets/navigation-assets/profile.png';

export default function AppNavigator({ state, descriptors, navigation }){
  return (
        <View style={styles.container}>
          <Pressable onPress={()=>navigation.navigate('Dashboard')}>
            <Modules image={Dashboard} label="Dashboard" />
          </Pressable>

          <Pressable onPress={()=>navigation.navigate('Property')}>
            <Modules image={Property} label="Property" />
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('Payments')}> 
            <Modules image={Payments} label="Payments" />
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('Maintenance')}> 
            <Modules image={Maintenance} label="Maintenance" />
          </Pressable>

      <Pressable onPress={()=>navigation.navigate('Account')}>
          <Modules image={Profile} label="Profile" />
      </Pressable>
     
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#748eed',
    borderRadius: 10,
    elevation: 5, // android shadow
    shadowColor: '#000', // ios shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
