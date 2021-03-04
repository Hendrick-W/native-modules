/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen'
import ToastScreen from './src/screens/ToastScreen'
import DeviceIdScreen from './src/screens/DeviceIdScreen';
import BatteryInfo from './src/screens/BatteryInfoScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ToastScreen" component={ToastScreen} />
        <Stack.Screen name="DeviceIdScreen" component={DeviceIdScreen}/>
        <Stack.Screen name="BatteryInfoScreen" component={BatteryInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
