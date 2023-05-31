import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../utils/theme";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: Theme.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: Theme.white,
        fontSize: 18,
        fontWeight: "bold",
    }

});

export default styles;