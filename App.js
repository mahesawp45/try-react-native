import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { BASKET, HOME, PREPARING_ORDER, RESTAURANT } from './src/constants/AppName';
import BasketScreen from './src/pages/BasketScreen';
import HomeScreen from './src/pages/HomeScreen';
import PreparingOrderScreen from './src/pages/PreparingOrderScreen';
import RestaurantScreen from './src/pages/RestaurantScreen';

import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName={HOME}>
          <Stack.Screen name={HOME} component={HomeScreen} />
          <Stack.Screen name={RESTAURANT} component={RestaurantScreen} />
          {/* ini buat screen jadi modal */}
          <Stack.Screen name={BASKET} component={BasketScreen} options={{ presentation: "modal", headerShown: false }} />
          <Stack.Screen name={PREPARING_ORDER} component={PreparingOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

