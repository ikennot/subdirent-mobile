import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function UnderLinedInut(props){
    return(
        <View>
         <Text style={styles.label}>
        {props.label ?? 'AKO'}
      </Text>
      <TextInput
        style={[styles.input, style]} // Pinapayagan ang override styles kung kailangan
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#ccc" // Light gray kung walang laman
        editable={false} // Gawing 'true' kung gusto mong na-e-edit
      />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    marginBottom: 20,
    width: '100%',     
  },
  label: {
    fontSize: 12,              // Maliit na font size tulad sa image
    fontWeight: 'bold',        // Bold text
    color: '#000000',          // Pure Black label
    textTransform: 'uppercase',// Automatic na gagawing ALL CAPS
    marginBottom: 5,           // Space sa pagitan ng Label at Input
  },
  input: {
    fontSize: 16,              // Mas malaki ng konti ang sagot
    fontWeight: 'bold',        // Bold din ang sagot ("AKO")
    color: '#555555',          // Dark Gray text
    textAlign: 'center',       // GITNA ang text
    borderBottomWidth: 1,      // Ang guhit sa ilalim
    borderBottomColor: '#000', // Kulay itim na guhit
    paddingVertical: 5,        // Padding para hindi dumikit sa guhit
  },
})