import { View, Text, TextInput, TouchableOpacity, requireNativeComponent, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import styles from './style';

const SwiftUIButton = requireNativeComponent('SwiftUIButton')

const SettingsScreen = () => {
    const [minutes, setMinutes] = useState(-1);

    return (
        <SwiftUIButton
            style={styles.container}
        />
        // <View style={styles.container} >
        //     <View style={styles.childContainer} >
        //         <Text style={styles.text} >App Restriction Time</Text>
        //         <View style={styles.textInputContainer} >
        //             <TextInput style={styles.textInput} placeholder='Minutes' onChangeText={setMinutes} />
        //         </View>
        //         <TouchableOpacity style={styles.touchable} onPress={handleMinutes} >
        //             <Text style={styles.touchableText} >Update</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>
    )
}


export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})