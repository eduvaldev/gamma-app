
import { StyleSheet, Linking, TouchableHighlight, Image, View } from 'react-native';
import { WebView } from 'react-native-webview';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppView from './Pages/AppView';
import Home from './Pages/Home';

const Stack = createStackNavigator();

export default function App() {

  function MyStack() {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					headerStyle: {
						backgroundColor: '#e5e500'
					},
					headerTintColor: 'black',
					headerTitleStyle: {
						fontWeight: 'bold'
					}
				}}
			>

				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AppView" component={AppView} />
			</Stack.Navigator>
		);
	}

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
