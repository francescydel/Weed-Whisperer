import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button, Alert,TextInput,TouchableOpacity } from 'react-native';
//import ExampleBackEndCall from './Screens/ExampleBackendCall';


export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  image :{
    marginBottom: 40
  }
});
