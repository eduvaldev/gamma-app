import { StyleSheet, Linking, TouchableHighlight, Image, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

export default function NavbarFooter({navigation}) {

  return (
    <LinearGradient
      colors={['#DDE1FF', '#DDE1FF']}
      style={styles.content}
    >
      <View
        style={styles.iconContent}
      >
        <Icon
          name="home"
          type="font-awesome"
          size={40}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  content:{
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    width: '100%',
    alignItems: "center",
  },
  iconContent: {
    width: '50%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  }
});