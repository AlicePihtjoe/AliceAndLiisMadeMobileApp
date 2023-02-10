import React, { useState } from "react";
import { TextInput, View, Text, Pressable, Image } from "react-native"
import { styles } from "./styles";

const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPAsswordVisible] = useState(false)

    const onEyePress = () => {
        setIsPAsswordVisible(!isPasswordVisible)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible}
                 placeholder={placeholder} style={styles.input} />
                 {
                    isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye-closed.png') : require('../../assets/eye.png')}/>
                        </Pressable>
                    ) : null
                 }
            </View>
        </View>
    )
}
export default Input