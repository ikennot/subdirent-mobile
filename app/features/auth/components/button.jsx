import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5AB8F0",
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});
