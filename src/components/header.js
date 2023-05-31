import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, BackHandler, Alert, Platform } from 'react-native';
import Clock from '../../assets/clock.svg'
import Search from "../../assets/search.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import RNExitApp from 'react-native-exit-app';

const Header = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [childRestrictTime, setChildRestrictTime] = useState(-1);
    // const navigation = useNavigation();

    var timer = 0;

    // const StoreTime = async () => {
    //     await AsyncStorage.setItem("Time", seconds.toString());
    // };

    // const restoreTime = async () => {
    //     await AsyncStorage.setItem("Time", "0");
    //     await AsyncStorage.setItem("RestrictTime", "undefined");
    //     await AsyncStorage.setItem("Date", "null");
    // }

    // const getTime = async () => {
    //     const sec = await AsyncStorage.getItem("Time");
    //     const resTime = await AsyncStorage.getItem("RestrictTime");
    //     if (sec != undefined || sec != null && resTime != undefined || resTime != null) {
    //         setSeconds(Number(sec));
    //         setChildRestrictTime(Number(resTime));
    //     }
    // }

    // const storeDate = async () => {
    //     const date = new Date();
    //     const time = date.toString().split(" ");
    //     await AsyncStorage.setItem("Date", time[2]);
    // }

    // const getDate = async () => {
    //     const getDate = await AsyncStorage.getItem("Date");
    //     const date = new Date();
    //     const time = date.toString().split(" ")
    //     console.log(getDate, time[2]);
    //     if (getDate != null) {
    //         if (getDate !== "null") {
    //             if (Number(getDate) < Number(time[2])) {
    //                 restoreTime();
    //                 getTime();
    //                 return;
    //             } else {
    //                 Alert.alert('', 'Access Restricted!', [

    //                     {
    //                         text: 'OK', onPress: () => {
    //                             if (Platform.OS == "android") {
    //                                 BackHandler.exitApp();
    //                             } else {
    //                                 RNExitApp.exitApp();
    //                             }
    //                         }
    //                     },
    //                 ]);
    //             }
    //         }
    //     }
    // }

    useEffect(() => {
        // getDate();
        // getTime();
        // console.log(childRestrictTime, "CCCC");
        if (seconds > childRestrictTime) {
            timer = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else {
            clearInterval(timer)
        }
    }, []);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const timerDisplay = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

    useEffect(() => {
        // StoreTime();
        if (timerDisplay.slice(0, -3) == childRestrictTime) {
            clearInterval(timer)
        } else {
        }
    }, [timerDisplay])
    return (
        <View style={{ ...style.mainView, paddingTop: 8 }}>
            <View style={{ ...style.middleView, marginTop: 6, marginLeft: 16 }}>
                <Clock width={24} height={24} />

                <Text style={style.text}>
                    {timerDisplay}
                </Text>
            </View>
            <View style={{ ...style.middleView, justifyContent: 'center', marginTop: 6, flex: 2 }}>
                <View style={{ ...style.lineView, marginRight: 10 }}>
                    <TouchableOpacity onPress={() => props?.setFollowingOrForyou(true)}>
                        <Text style={{ ...style.text, fontWeight: props?.followingOrForyou ? 'bold' : '400' }}>
                            Following
                        </Text>
                        {
                            props?.followingOrForyou &&
                            <View style={style.line}>
                            </View>}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => props?.setFollowingOrForyou(false)}>
                    <Text style={{ ...style.text, fontWeight: !props?.followingOrForyou ? 'bold' : '400' }}>
                        For you
                    </Text>
                    {
                        !props?.followingOrForyou && <View style={style.line}>
                        </View>
                    }

                </TouchableOpacity>
            </View>
            <View style={style.searchView}>
                <TouchableOpacity style={{ marginRight: 10 }} >
                    <Search width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header;
const style = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#011E29',
        height: '7%',
        justifyContent: "space-between"
    },
    image: {
        height: 19,
        width: 20,
        marginRight: 4,
        marginTop: 5,
        tintColor: 'white'
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18
    },
    middleView: {
        flexDirection: 'row',
        flex: 0.5,
    },
    line: {
        width: 30,
        height: 4,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    lineView: {
        flexDirection: 'column', alignItems: 'center', width: '36%'
    },
    searchView: {
        marginTop: 6,
        flex: 0.5,
        alignItems: "flex-end",
    }
})