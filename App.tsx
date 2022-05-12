import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Linking, View, ImageBackground, TouchableHighlight, Image } from 'react-native';

export default function App() {
  const url = 'https://baseproject.dy4pcxrzkp8qg.amplifyapp.com/';
  const image = { uri: "https://i.ibb.co/mHvqYN9/Logos-low-fidelity-1.png" };

  const OpenWeb = () => {
    Linking.openURL(url);
  };
  //add coment init

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={OpenWeb}>
        <Image style={styles.imagestyle} source={image} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: "center",
    alignItems: "center",
  },
  imagestyle: {
    flex: 1,
    justifyContent: "center",
    height: 94,
    width: 81,
    borderRadius: 10,
    resizeMode: 'stretch'
  },
  button: {
    
  }
});
