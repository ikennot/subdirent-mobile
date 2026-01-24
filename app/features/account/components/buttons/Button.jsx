import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';


export default function Button({label = 'EDIT',color = '#5AB8F0',size ='20'}){
  <Pressable style={{
    backgroundColor:color,
    width:size,
    height:size,
    justifyContent:'center',
    alignItems:'center'
  }}> 
    <Text style={{color:'white'}}>{label}</Text>
  </Pressable>
}
