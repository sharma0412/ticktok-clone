import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Pressable } from "react-native";
import { Theme } from "../utils/theme";

import { STRINGS } from "../utils/string";
import FunctionalBar from "./functionalBar";

const { height, width } = Dimensions.get("screen");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RenderFollowing = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("#2DC59F");

    return (
        <View style={styles.container} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: '85%' }} onPress={() => setShowAnswer(!showAnswer)} >
                    <View style={[styles.childContainer, { justifyContent: "center" }]} >
                        <Text style={styles.fonStyleLabel} >{props?.item?.flashcard_front}</Text>
                    </View>
                    {
                        showAnswer && <View style={[styles.childContainer, styles.childContainerAddStyle]} >
                            <Text style={styles.answerStyle} >{STRINGS.answer}</Text>
                            <Text style={styles.fonStyleLabel} >{props?.item?.flashcard_back}</Text>
                            <Text style={{ color: Theme.white, marginTop: 30, marginBottom: 3 }} >How well did you know this?</Text>
                            {
                                number == 0 ? <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                    <TouchableOpacity onPress={() => [setNumber(1), setColor("#F17D23")]} style={[styles.textBackgroundColor, { backgroundColor: Theme.orange }]} >
                                        <Text style={styles.textColor} >1</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => [setNumber(2), setColor("#FBB668")]} style={[styles.textBackgroundColor, { backgroundColor: Theme.light_orange }]} >
                                        <Text style={styles.textColor} >2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => [setNumber(3), setColor("#FFD449")]} style={[styles.textBackgroundColor, { backgroundColor: Theme.yellow }]} >
                                        <Text style={styles.textColor} >3</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => [setNumber(4), setColor("#16624F")]} style={[styles.textBackgroundColor, { backgroundColor: Theme.dark_green }]} >
                                        <Text style={styles.textColor} >4</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => [setNumber(5), setColor("#2DC59F")]} style={[styles.textBackgroundColor, { backgroundColor: Theme.secondary }]} >
                                        <Text style={styles.textColor} >5</Text>
                                    </TouchableOpacity>
                                </View> :
                                    <TouchableOpacity style={{ width: "100%", height: 52, backgroundColor: color, borderRadius: 10, alignItems: "center", justifyContent: "center" }} >
                                        <Text style={styles.textColor} >{number}</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    }
                </Pressable>
                <View>
                    <FunctionalBar />
                </View>
            </View>
        </View>
    )
};

export default React.memo(RenderFollowing);

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fonStyleLabel: {
        color: Theme.white,
        fontSize: 21,

    },
    answerStyle: {
        color: Theme.secondary,
        fontSize: 13,
        marginTop: 24,
    },
    childContainer: {
        marginBottom: 40
    },
    childContainerAddStyle: {
        marginTop: 24,
        borderTopWidth: 1,
        borderColor: Theme.green,
    },
    textColor: {
        color: Theme.white,
    },
    textBackgroundColor: { width: 50.8, height: 52, backgroundColor: Theme.orange, borderRadius: 10, alignItems: "center", justifyContent: "center" }
})