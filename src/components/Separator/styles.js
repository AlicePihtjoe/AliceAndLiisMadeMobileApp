import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({


container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
},

line: {
    backgroundColor: colors.lightGray,
    height: 1,
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 5
},

text: {
    color: colors.blue,
    fontWeight: '500'
}
})