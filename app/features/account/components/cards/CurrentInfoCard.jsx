import React from 'react';
// 1. Add 'Dimensions' to the import list
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get("window");

export default function CurrentInfoCard() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}/>
     
            <View style={styles.innerContainer2}/>

          

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
        flex : 1,
      backgroundColor: '#081824',
    },
      innerContainer2:{
        flex : 1,
      backgroundColor: '#215175',
    }
});