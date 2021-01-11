import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';

export default function OrdersList() {
    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                <Text>Listagem de Pedidos</Text>
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});
