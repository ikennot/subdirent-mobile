import  {View, StyleSheet,Image} from "react-native";
import CurrentInfoCard from "../components/cards/CurrentInfoCard";


export default function Account(){
    return (
        <View style={styles.Screen} > 
          <CurrentInfoCard unit="unit1" Location="Phase 1" price = {10000}/>
        </View>
    )
}



const styles = StyleSheet.create({
       Screen:{
   flex:1,
   justifyContent: 'center',
   gap: 20,
   alignItems:'center'
       }
})