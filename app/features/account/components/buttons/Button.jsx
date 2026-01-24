import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';


export default function Button({label = 'EDIT',color = '#5AB8F0',width ='60',height='20',}){
    return (
  <Pressable style={{
    backgroundColor:color,
    width:width,
    height:height,
    justifyContent:'center',
    alignItems:'center',
      borderRadius: 5,

  }}> 
    <Text style={{color:'white',fontSize:10}}>{label}</Text>
  </Pressable>
    )
}
