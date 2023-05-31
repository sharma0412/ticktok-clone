import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import BottomNavigation from './bottom-navigation';

const Stack = createNativeStackNavigator();

const StackNavigationScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
    )
}

export default StackNavigationScreen;