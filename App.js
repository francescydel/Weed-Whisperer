import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/home-background.png")}></Image>
      <Button
        onPress={exampleAlert}
        title="Test Button"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>This is the weed whisperer app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const exampleAlert = () => {
  Alert.alert('Button Pressed', 'random message', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
