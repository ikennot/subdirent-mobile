import  {View, StyleSheet,Image,Text} from "react-native";
import Modules from "./buttons/Modules";
import Dashboard from '../../../assets/navigation-assets/dashboard.png';
import Property from '../../../assets/navigation-assets/property.png';
import Payments from '../../../assets/navigation-assets/money.png';
import Maintenance from '../../../assets/navigation-assets/maintenance.png';
import Profile from '../../../assets/navigation-assets/profile.png';



export default function AppNavigator(){
  return (
        <View style={styles.container}>
        <Modules image={Dashboard} label="Dashboard" />
      <Modules image={Property} label="Property" />
      <Modules image={Payments} label="Payments" />
      <Modules image={Maintenance} label="Maintenance" />
      <Modules image={Profile} label="Profile" />
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
    width: '100%',
    height: 70,
    borderRadius: 10,
    backgroundColor: '#ffffff', // important for shadow and border visibility
    borderWidth: 1,           // border
    borderColor: '#748eed',      // light gray border
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    // Android shadow
    elevation: 5,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    }
})