import  {View, StyleSheet,Image,Text} from "react-native";
import CurrentInfoCard from "../components/cards/CurrentInfoCard"
import Infos from "../components/cards/Infos";
import ProfilePicker from "../components/cards/ProfilePicker";
import SecuritySettings from "../components/cards/SecuritySettings";
import LogoutView from "../components/cards/LogoutView";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Account(){
    return (
        <SafeAreaView style={styles.Screen} > 
          <LogoutView/>
          <CurrentInfoCard unit="unit1" Location="Phase 1" price = {10000}/>
          <Text style={styles.personalInfoText}>Personal Information</Text>
          <Infos/>
          <ProfilePicker/>
          <SecuritySettings/>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
       Screen:{
   flex:1,
   justifyContent: 'flex-start',
   gap: 20,
   alignItems:'center',
    marginHorizontal:20,
    marginVertical:30
       },
    personalInfoText:{
        alignSelf: 'flex-start', 
        marginHorizontal:10,
      
    }
})