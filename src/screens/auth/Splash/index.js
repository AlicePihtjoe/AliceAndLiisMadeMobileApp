import React from "react";
import {
    Text,
    View,
    Image
} from "react-native"
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash-image.png')}/>
            <Text style={styles.title}>Alice & Liis </Text>
            <Text style={[styles.title, styles.innerTitle]}>Splash </Text>
            <Text style={styles.title}>screen</Text>

            <Button title="Sign Up"/>
        </View>
    )
}
export default Splash