import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get("window");
import ProfilePickerButton from '../buttons/ProfilePickerButton'
import * as ImagePicker from 'expo-image-picker';

export default function ProfilePicker(){
    return (
        <View style={styles.container}>
         <Text style={{fontSize:12}}>Update Profile Photo</Text>
         <ProfilePickerButton/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
    width: screenWidth *0.8,
    height: 40,
        justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    padding:10
    
    }
})
