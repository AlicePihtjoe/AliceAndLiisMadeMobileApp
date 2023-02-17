import React from "react";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native"
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = ({navigation}) => {
    

    const onSignup = () => {
        navigation.navigate('Signup')
    }

    const onSignin = () => {
        navigation.navigate('Signin')
    }

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash-image.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Alice & Liis </Text>
                <Text style={[styles.title, styles.innerTitle]}>Splash </Text>
                <Text style={styles.title}>screen</Text>
            </View>

            <Button onPress={onSignup} title="Sign Up"/>
            <Pressable hitSlop={20}>
                <Text onPress={onSignin} style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}
export default Splash