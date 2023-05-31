import { View, Text, StatusBar, TouchableOpacity, Image, } from 'react-native';
import React from 'react';
import styles from './style';
// import { NativeModules } from 'react-native';
// const { VoiceChangingModule } = NativeModules;

const BookmarkScreen = () => {
    // const audioTrackURL = 'https://file-examples.com/storage/fef30bb338646ba5a99fd64/2017/11/file_example_MP3_1MG.mp3';

    // const changeToAlein = () => {
    //     Platform.OS === 'android'
    //         ? VoiceChangingModule.changeVoiceToAlien(audioTrackURL)
    //         : VoiceChangingModule.changeVoiceToAlien();
    // };

    // const changeToChild = () => {
    //     Platform.OS === 'android'
    //         ? VoiceChangingModule.changeVoiceToChild(audioTrackURL)
    //         : VoiceChangingModule.changeVoiceToChild();
    // };

    // const changeToFast = () => {
    //     Platform.OS === 'android'
    //         ? VoiceChangingModule.speedUpVoice(audioTrackURL)
    //         : VoiceChangingModule.speedUpVoice();
    // };

    // const changeToSlow = () => {
    //     Platform.OS === 'android'
    //         ? VoiceChangingModule.slowDownVoice(audioTrackURL)
    //         : VoiceChangingModule.slowDownVoice();
    // };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={'#e4e5ea'} />
            <Text style={styles.title}>Voice Changer</Text>
            <Text style={styles.title}> Change Voice Effects </Text>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => changeToAlein()}>
                    <Image
                        source={{
                            uri:
                                'https://icons.iconarchive.com/icons/google/noto-emoji-smileys/256/10101-alien-icon.png',
                        }}
                        resizeMode={'contain'}
                        style={styles.icon}
                    />
                    <Text>Alien</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeToChild()}>
                    <Image
                        source={{
                            uri:
                                'https://pics.freeicons.io/uploads/icons/png/2793494581535699799-512.png',
                        }}
                        resizeMode={'contain'}
                        style={styles.icon}
                    />
                    <Text>Child</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeToFast()}>
                    <Image
                        source={{
                            uri:
                                'https://www.pngjoy.com/pngl/346/6457386_black-arrows-fast-forward-symbol-transparent-png-download.png',
                        }}
                        resizeMode={'contain'}
                        style={styles.icon}
                    />
                    <Text>Fast</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeToSlow()}>
                    <Image
                        source={{
                            uri:
                                'https://img.pngio.com/action-motion-play-slow-icon-slow-motion-png-512_512.png',
                        }}
                        resizeMode={'contain'}
                        style={styles.icon}
                    />
                    <Text>Slow</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

export default BookmarkScreen;