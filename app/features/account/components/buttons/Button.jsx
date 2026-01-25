import React from 'react';
import { Pressable, Text } from 'react-native';

export default function Button({
  label = 'EDIT',
  color = '#5AB8F0',
  width = 60,
  height = 20,
  style,
  textStyle,
}) {
  return (
    <Pressable
      style={[
        {
          backgroundColor: color,
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginHorizontal: 2,
        },
        style,
      ]}
    >
      <Text style={[{ fontSize: 10, color: 'white' }, textStyle]}>
        {label}
      </Text>
    </Pressable>
  );
}
