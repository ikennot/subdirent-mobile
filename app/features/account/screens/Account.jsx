import  {View, StyleSheet,Image,Text} from "react-native";
import CurrentInfoCard from "../components/cards/CurrentInfoCard";


export default function Account(){
    return (
        <View style={styles.Screen} > 
          <CurrentInfoCard unit="unit1" Location="Phase 1" price = {10000}/>
          <Text style={styles.personalInfoText}>Personal Information</Text>
        </View>
    )
}



const styles = StyleSheet.create({
       Screen:{
   flex:1,
   justifyContent: 'center',
   gap: 20,
   alignItems:'center',
    marginHorizontal:20,
    marginVertical:30
       },
    personalInfoText:{
        alignSelf: 'flex-start', // <--- this moves it to left side
        marginHorizontal:10,
        flex:1
    }
})