import React from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native"
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash-image.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Alice & Liis </Text>
                <Text style={[styles.title, styles.innerTitle]}>Splash </Text>
                <Text style={styles.title}>screen</Text>
            </View>

            <Button title="Sign Up"/>
            <TouchableOpacity hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Splash