import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Linking, TouchableHighlight, Image, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import NavbarFooter from '../Layaout/NavbarFooter';

export default function AppView({ navigation }) {
  const url = 'https://baseproject.dy4pcxrzkp8qg.amplifyapp.com/';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView 
        source={{ uri: url }} 
      />
      <NavbarFooter navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
