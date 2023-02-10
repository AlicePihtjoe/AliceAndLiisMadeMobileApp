import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 14,
        borderColor: colors.grey,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    label: {
        marginVertical: 8,
        color: colors.blue,
        fontWeight: '500',
        marginBottom: 8
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
})