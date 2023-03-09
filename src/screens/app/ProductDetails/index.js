import React from "react";
import { ScrollView, View, Text, Image, Pressable, Linking } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import { styles } from "./styles";
import ImageCarousel from "../../../components/ImageCarousel";

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}
    console.log(product)

const onBackPress = () => {
    navigation.goBack()
}

const onContact = () => {
    // phone call
    let phone = 'real phone number'
    Linking.openURL(`tel:${phone}`)

    // email
    let email = 'real email'
    Linking.openURL(`emailto:${email}`)
}

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{uri: product?.image}}/>
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/backCont.png')}/>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable>
                    <Image style={styles.icon} source={require('../../../assets/SaveToFavorites.png')}/>
                </Pressable>
                <Button onPress={onContact} style='button' title="Contact Seller"/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails)