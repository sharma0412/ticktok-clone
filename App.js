import React from "react";
import { View, Text, SafeAreaView, StyleSheet, BackHandler } from "react-native";
import Home from "./src/screens/home";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/navigation/bottom-navigation";
import StackNavigationScreen from "./src/navigation/stackNavigation";

const App = () => {

    return (
        <NavigationContainer>
            <StackNavigationScreen />
        </NavigationContainer>

    )
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})