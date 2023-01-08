import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { HOME, RESTAURANT } from './src/constants/AppName';
import HomeScreen from './src/pages/HomeScreen';
import RestaurantScreen from './src/pages/RestaurantScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={RESTAURANT} component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

