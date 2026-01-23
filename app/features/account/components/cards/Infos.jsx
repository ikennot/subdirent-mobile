import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
const { width: screenWidth } = Dimensions.get("window");

export default function Infos(props){
return(<View style={styles.container}>
  <View>
    
  </View>

</View>)
}


const styles = StyleSheet.create({
container: {
  width: screenWidth * 0.8,
  height: 200,
   backgroundColor: '#F9FDFF',
  elevation: 2,
  borderRadius: 12,
  flexDirection: 'column'
}

})