
import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function OrdersList() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Erro ao buscar os pedidos'))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        if(isFocused){
            fetchData();
        }
    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails',{
            order
        });
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
        
                {isLoading ? (
                        <Text style={styles.waiting}>Buscando pedidos ...</Text>
                    ) : (
                        orders.map(order => (
                            <RectButton onPress={() => handleOnPress(order)}>
                                <TouchableWithoutFeedback key={order.id}>
                                    <OrderCard order={order}/>
                                </TouchableWithoutFeedback>
                            </RectButton>
                            
                        ))
                )}
                
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    waiting: { 
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#263238',
        fontFamily: 'OpenSans_700Bold',
        textAlign: 'center'
    }
});
