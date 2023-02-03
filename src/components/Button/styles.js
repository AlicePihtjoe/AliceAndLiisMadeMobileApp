import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink,
    padding: 8,
    marginLeft: 6,
    marginRight: 6,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 5,
    width: '100%'
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
})