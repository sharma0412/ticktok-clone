import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../utils/theme";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: Theme.primary,
        paddingHorizontal: 20,
    },
    childContainer: {
        flex: 0.5,
        justifyContent: "center",
    },
    text: {
        marginTop: 50,
        color: Theme.white,
        fontSize: 18,
        marginBottom: 20,
        alignSelf: 'center',
        fontWeight: "bold",
    },
    textInputContainer: {
        backgroundColor: Theme.white,
        paddingVertical: 6,
        width: '40%',
        paddingHorizontal: 6,
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 6,
    },
    textInput: {
        width: "100%",
    },
    touchable: {
        paddingVertical: 6,
        backgroundColor: Theme.white,
        borderRadius: 10,
        marginTop: 20,
        width: '40%',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    touchableText: {
        fontSize: 18,
        color: Theme.primary,
    },
});

export default styles;