import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function UnderLinedInput(props) {
  const displayValue = props.value ? props.value : ''; // kung may value, ipakita; kung wala, empty para lumabas placeholder

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label ?? 'First Name'}</Text>
      
      <TextInput
        style={styles.input}
        value={displayValue}
        placeholder={props.value ? '' : props.placeholder ?? 'Enter name'} // placeholder lang kung walang value
        placeholderTextColor="#747474"
        editable={false} // read-only
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingRight:20,
    width: '100%',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  input: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#555555',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingVertical: 5,
  },
});
