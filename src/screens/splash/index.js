import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("BottomNavigation");
        }, 2000)
    }, []);

    return (
        <View style={styles.container} >
            <Text style={styles.text} >Quizlr</Text>
        </View>
    )
}

export default SplashScreen;