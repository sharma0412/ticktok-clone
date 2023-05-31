import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e4e5ea',
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#000',
        marginVertical: 25,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingHorizontal: 50,
    },
    warningText: {
        color: 'red',
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textAlign: 'center',
    },
    spacing: {
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
    },
    icon: {
        height: 40,
        width: 40,
        marginBottom: 15,
    },
});

export default styles;
