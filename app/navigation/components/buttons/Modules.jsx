import { Pressable, StyleSheet, Image, Text } from "react-native";
import Dashboard from '../../../../assets/navigation-assets/dashboard.png';

export default function Modules({ image, label }) {
  return (
    <Pressable style={styles.container}>
      <Image source={image ?? Dashboard} style={styles.image} />
      <Text style={styles.text}>{label ?? 'DASHBOARD'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',  // image on top, text below
    alignItems: 'center',     // center horizontally
    justifyContent: 'center', // center vertically (if needed)
    gap:-2,                   // space between image and text
    padding: 8,               // optional padding for touchable area
  },
  image: {
    width: 30,                // adjust to fit your icon
    height: 30,
    resizeMode: 'contain',    // maintain aspect ratio
    marginBottom: 4,          // extra spacing if needed
  },
  text: {
    fontSize: 8,             // adjust to match design
    fontWeight: '700',        // bold
    color: '#1a1a1a',         // dark text
    textAlign: 'center',
  },
});
