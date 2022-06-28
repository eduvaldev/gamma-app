import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Linking, TouchableHighlight, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  const url = 'https://baseproject.dy4pcxrzkp8qg.amplifyapp.com/';
  const image = { uri: "https://i.ibb.co/rmQkpDv/Logos-low-fidelity-1-removebg.png" };

  const OpenWeb = () => {
    navigation.navigate('AppView');
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#DDE1FF']}
      style={styles.container}>

      <TouchableHighlight style={styles.contImage} onPress={OpenWeb}>
        <Image style={styles.imagestyle} source={image} />
      </TouchableHighlight>
      <StatusBar style="dark" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contImage: {
    height: 100,
    width: 100,
  },
  imagestyle: {
    flex: 1,
    justifyContent: "center",
    height: '100%',
    width: '100%',
    borderRadius: 30,
    resizeMode: 'stretch'
  }
});
