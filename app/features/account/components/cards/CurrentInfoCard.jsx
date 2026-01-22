import React from 'react';
// 1. Add 'Dimensions' to the import list
import { View, Text, StyleSheet, Dimensions ,Image} from 'react-native';
import HouseLogo from '@/assets/app-assets/house.png'
const { width: screenWidth } = Dimensions.get("window");

export default function CurrentInfoCard(props) {
    return (
        <View style={styles.container}>
        <View style={styles.sampleContainer}/>
     
        <View style ={styles.innerContainer}>
        <View style={styles.HeaderView}>
        <Image source={HouseLogo} style={{width:15, height:15}}/>
     <Text style={styles.Header}>CURRENT UNIT</Text>
        </View>
      
        <Text style={styles.textColor}>
          Unit: <Text style={styles.boldText}>{props.unit}</Text>
        </Text>
        <Text style={styles.textColor}>
          Location: <Text style={styles.boldText}>{props.Location}</Text>
        </Text>
        <Text style={styles.textColor}>
          Price: <Text style={styles.boldText}>{props.price}</Text>
        </Text>
        </View>

          

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // 2. Change * 90 to * 0.9 (to get 90% of the screen width)
        width: screenWidth * 0.8, 
        height: 150,
        backgroundColor: '#e1f2ff',
        borderRadius: 10,
         elevation: 5,
        flexDirection:'row',
        justifyContent:'space-around'
    },
   innerContainer:{
    flex: 1,
    flexDirection:'column',
    justifyContent: "center", // vertical (main axis)
    alignItems: "flex-start",     // horizontal (cross axis)
    padding:10
   },
   sampleContainer:{
    flex:1,
     backgroundColor: '#122b3e',

   },

    textColor:{
    color:'#808080'
    },

     boldText: {
    fontWeight: 'bold',
    
  },

  HeaderView:{
    flexDirection:'row',
    alignItems:'center',
    paddingBottom: 10
  },
  Header:{
    fontWeight: 'bold',
    fontSize:14
  }
});