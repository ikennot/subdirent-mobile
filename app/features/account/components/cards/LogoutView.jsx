import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions ,Image} from 'react-native';
import Logout from '@/assets/account-assets/logout.png'
const { width: screenWidth } = Dimensions.get("window");


export default function LogoutView(){
    return(<View style={styles.container}>
        <View style={{justifyContent:'center',alignContent:'center'}}>
 <Image source={Logout} style = {{width:25,height:25}}/>
    <Text style={{fontSize:8}}>Logout</Text>
        </View>
    
    </View>)
}


const styles = StyleSheet.create({
    container: {
    width: screenWidth *0.8,
    height: 40,
        justifyContent:'flex-end',
    alignItems:'center',
    flexDirection:'row',
    padding:10,

    
    }
})
