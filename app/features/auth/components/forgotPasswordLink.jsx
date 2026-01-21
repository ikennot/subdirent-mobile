import { Pressable, Text, StyleSheet, View } from "react-native";
import { Linking } from "react-native";

export default function ForgotPasswordLink({ title, url, onPress }) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text style={styles.link}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // center horizontally
  },
  link: {
    color: "#2563eb",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
});
