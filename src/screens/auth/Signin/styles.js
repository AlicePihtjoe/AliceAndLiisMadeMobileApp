import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        paddingRight: 24,
        paddingLeft: 24,
        height: '100%',
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        marginVertical: 54
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },
    innerTitle: {
        color: colors.pink,
        textDecorationLine: 'underline',
        textAlign: "center"
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold: {
        fontWeight: 'bold',
    },
    button: {
        marginVertical: 20
    }
})