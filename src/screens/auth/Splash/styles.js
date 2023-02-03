import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
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
        color: 'pink',
        textDecorationLine: 'underline',
        textAlign: "center"
    },
    footerText: {
        color: 'pink',
        padding: 8,
        marginLeft: 6,
        marginRight: 6,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    }
})