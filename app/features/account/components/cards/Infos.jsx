import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get("window");
import UnderLinedInput from '../inputs/UnderlinedInput';
import Button from '../buttons/Button';

export default function Infos(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, { width: '35%' }]}>
        <UnderLinedInput style={styles.input} placeholder="First Name" label="First Name"/>
        <UnderLinedInput style={styles.input} placeholder="Last Name" label ="Last Name" />
          <UnderLinedInput style={styles.input} placeholder="M.I" label ="M.I." />
      </View>
      <View style={[styles.innerContainer, { width: '50%' }]}>
        <UnderLinedInput style={styles.input} placeholder="Phone number" label="Phone number"/>
        <UnderLinedInput style={styles.input} placeholder="Email Address" label ="Email Address" />
      </View>
       <View style={[styles.innerContainer, { width: '75%' }]}>
        <UnderLinedInput style={styles.input} placeholder="Address" label ="Address" />
      </View>
       <View style={[styles.buttonContainer,{width:'100%'}]}>
    
      <Button/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    height: 200,
    backgroundColor: '#F9FDFF',
    elevation: 2,
    borderRadius: 12,
    flexDirection: 'column',
    padding: 10,
  },
  innerContainer: {
    // width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  
  },
  input: {
    flex: 1,             // <-- bawat input mag-a-occupy ng pantay
    marginRight: 10,     // <-- gap sa pagitan
  },

  buttonContainer:{
     flexDirection: 'row',
     justifyContent:'flex-end',
    alignItems: 'center',

  }
  
});
