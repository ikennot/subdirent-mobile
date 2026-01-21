import React from "react";
import { TextInput,StyleSheet } from "react-native";

export function Input(props){
    return <TextInput style ={[styles.input, props.style]} {...props} />
}


const styles = StyleSheet.create({
    input:{
        padding:15,
        borderRadius:20,
        borderStyle:'solid',
        borderColor:'grey',
       borderWidth: 1,
       width:350
    }
})