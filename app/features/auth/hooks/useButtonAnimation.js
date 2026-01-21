import { useRef } from "react";
import { Animated } from "react-native";

export function useButtonAnimation({
  buttonInitial = 1,
  buttonPressed = 0.6,
  textInitial = 1,
  textPressed = 0.4,
  textColorInitial = "#FFFFFF",
  textColorPressed = "#000000",
  duration = 200,
} = {}) {
  const buttonOpacity = useRef(new Animated.Value(buttonInitial)).current;
  const textOpacity = useRef(new Animated.Value(textInitial)).current;
  const textColorAnim = useRef(new Animated.Value(0)).current; // for color interpolation

  const pressIn = () => {
    Animated.timing(buttonOpacity, { toValue: buttonPressed, duration, useNativeDriver: true }).start();
    Animated.timing(textOpacity, { toValue: textPressed, duration, useNativeDriver: false }).start();
    Animated.timing(textColorAnim, { toValue: 1, duration, useNativeDriver: false }).start();
  };

  const pressOut = () => {
    Animated.timing(buttonOpacity, { toValue: buttonInitial, duration, useNativeDriver: true }).start();
    Animated.timing(textOpacity, { toValue: textInitial, duration, useNativeDriver: false }).start();
    Animated.timing(textColorAnim, { toValue: 0, duration, useNativeDriver: false }).start();
  };

  const textColor = textColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [textColorInitial, textColorPressed],
  });

  return { buttonOpacity, textOpacity, textColor, pressIn, pressOut };
}
