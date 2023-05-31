import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../utils/theme";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: Theme.primary,
    },

});

export default styles;