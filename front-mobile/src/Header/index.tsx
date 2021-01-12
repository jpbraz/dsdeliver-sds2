import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function Header() {
    const navigation = useNavigation();
    const handlerOnPress = () => {
        navigation.navigate('Home');
    }
    return (
        <TouchableWithoutFeedback onPress={handlerOnPress}>
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} />
                <Text style={styles.text}>DS Deliver</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#da5c5c',
        height: 70,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#fff',
        marginLeft: 15,
        fontFamily: 'OpenSans_400Regular',
    }
});
