import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Theme } from "../utils/theme";
import { useState } from "react";
import FunctionalBar from "./functionalBar";
import { Reveal_list } from "../services/home-services";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RenderForyou = (props) => {

    const [correctAnswer, setCorrectAnswer] = useState("")
    const [tappedAnswer, setTappedAnswer] = useState("")


    async function handleAnswerApi(params, answerId) {
        setTappedAnswer(answerId)
        const response = await Reveal_list(params)
        setCorrectAnswer(response?.correct_options[0]?.id)
    }


    return (
        <View style={styles.container} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '80%' }}>
                    <View style={styles.childContainer} >
                        <Text style={styles.fonStyleLabel} >{props?.item?.question}</Text>
                    </View>
                    <View style={{ flex: 2, marginBottom: 60 }} >
                        {
                            props?.item?.options.map((item, index) => {
                                const isCorrectAnswer = item?.id == correctAnswer;
                                const isTappedAnswer = item?.id == tappedAnswer;
                                const answerStyle = [styles.answerTextStyle,
                                {
                                    backgroundColor: isTappedAnswer ? (isCorrectAnswer ? Theme.rightAnswer : 'red')
                                        : (isCorrectAnswer ? Theme.rightAnswer : "#003A4F")
                                }
                                ];
                                return (
                                    <TouchableOpacity
                                        disabled={tappedAnswer != "" ? true : false}
                                        key={item?.id}
                                        onPress={() => handleAnswerApi(props?.item?.id, item?.id)}
                                        style={answerStyle}
                                    >
                                        <Text style={styles.answerText}>{item?.answer}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={{ marginStart: '3%' }}>
                    <FunctionalBar />
                </View>
            </View>
        </View>
    )
};

export default RenderForyou;

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    fonStyleLabel: {
        color: Theme.white,
        fontSize: 21,
        textAlign: "left",
    },
    answerText: {
        paddingVertical: 16,
        paddingLeft: 12,
        fontSize: 17,
        color: Theme.white,
    },
    childContainer: {
        marginBottom: 30,
        flex: 1,
        bacgroundColor: "red"
    },
    childContainerAddStyle: {
        marginTop: 24,
        borderTopWidth: 1,
        borderColor: Theme.green,
    },
    answerTextStyle: {
        width: "100%",
        backgroundColor: Theme.light_green,
        borderRadius: 10,
        marginBottom: 5, marginTop: 5,
    },
    common: {
        marginTop: 8,
    }
})