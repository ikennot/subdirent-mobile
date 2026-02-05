import { Pressable, StyleSheet, Animated , Dimensions} from "react-native";
import { useButtonAnimation } from "../hooks/useButtonAnimation";
const { width: screenWidth } = Dimensions.get("window");
export default function Button({ title, onPress }) {
  const { buttonOpacity, textOpacity, textColor, pressIn, pressOut } = useButtonAnimation();

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut}>
      <Animated.View style={[styles.button, { opacity: buttonOpacity }]}>
        <Animated.Text style={[styles.text, { opacity: textOpacity, color: textColor }]}>
          {title}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5AB8F0",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
      width: screenWidth * 0.9, // 90% of device width
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
