import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get("window");
import Button from '../buttons/Button';
export default function SecuritySettings(){
    return (
                <View style={styles.container}>
         <Text style={{fontSize:12}}>Security Settings</Text>
       <Button
  label="CHANGE"
  color="#F3F3F3"
  width={60}
  height={20}
  style={{ borderColor: '#C0B4B4', borderWidth: 1 }}
  textStyle={{ color: 'black' }}
/>

        </View>


    )

    

}


const styles = StyleSheet.create({
    container: {
    width: screenWidth *0.9,
    height: 40,
        justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    padding:10,
    marginTop:-20
    }
})
