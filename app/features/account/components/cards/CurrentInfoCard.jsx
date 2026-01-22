import React from 'react';
// 1. Add 'Dimensions' to the import list
import { View, Text, StyleSheet, Dimensions ,Image} from 'react-native';
import HouseLogo from '@/assets/app-assets/house.png'
import Avatar from '@/assets/app-assets/account/profile.png'
import ShitLine from '@/assets/app-assets/account/shitLine.png'
const { width: screenWidth } = Dimensions.get("window");

export default function CurrentInfoCard(props) {
    return (
        <View style={styles.container}>
         <Image source={ShitLine} style={styles.ShitLine}/>
        <View style={styles.innerContainer1}>
        <Image source={Avatar} style={styles.avatar}/>
     <Text style={styles.Header}>{props.name ?? "Kenneth Domdom"}</Text>

           <Text>Tenant</Text>
          </View>
        <View style ={styles.innerContainer2}>
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
        justifyContent:'space-around',
        position:'relative'
    },
   innerContainer1:{
    flex: 1,
    flexDirection:'column',
    justifyContent: "center", // vertical (main axis)
    alignItems: "center",     // horizontal (cross axis)
    padding:10
   },

    innerContainer2:{
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
    paddingBottom: 10,
    gap:10
  },
  Header:{
    fontWeight: 'bold',
    fontSize:14
  },

  avatar:{
     width: 70,
    height: 70,
    borderRadius: 35,
    alignSelf:'center'
  },
  ShitLine:{
       position: "absolute",
      top: 15,
      right: 145,
      height:120
  }
});