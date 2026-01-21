import React from "react";
import { TextInput,StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
export function Input(props){
    return <TextInput style ={[styles.input, props.style]} {...props} />
}


const styles = StyleSheet.create({
    input:{
        padding:15,
        width: screenWidth * 0.9, // 90% of device width
        borderRadius:20,
        borderStyle:'solid',
        borderColor:'grey',
       borderWidth: 1,
    }
})