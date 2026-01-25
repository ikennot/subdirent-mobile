import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfilePicker = () => {
  return (
    <View style={styles.container}>
      {/* Kaliwang bahagi: Ang "Button" */}
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>CHOOSE FILE</Text>
      </TouchableOpacity>

      {/* Kanang bahagi: Ang Label */}
      <View style={styles.labelContainer}>
        <Text style={styles.labelText} numberOfLines={1}>
          No File Choosen
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Pinagtabi ang button at text
    borderWidth: 1,
    borderColor: '#C0B4B4', // Kulay base sa iyong image
    borderRadius: 6,
    overflow: 'hidden',
    height:25,
    width: 120,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#F3F3F3', // Light gray para sa button area
    paddingHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#C0B4B4',
  },
  buttonText: {
    fontSize:8,
    fontWeight: 'bold',
    color: '#444',
  },
  labelContainer: {
    flex: 1, // Kinukuha ang natitirang space sa kanan
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  labelText: {
    fontSize: 8,
    color: '#888',
  },
});

export default ProfilePicker;