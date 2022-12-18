import {View, Text, FlatList, TouchableOpacity} from "react-native";
import List from "../components/List";
import {useCart} from "../context/CartContext";
import React from "react";
import CartItem from "../components/CartItem";
import DetailedList from "../components/DetailedList";
import ScreenConstants from "../constants/ScreenConstants";

const CartScreen = ({navigation}) => {

    const {state} = useCart();

    const isCartEmpty = state.length === 0;

    const handleConfirmationCart = () => {
        navigation.navigate(ScreenConstants.PaymentScreen.name)
    }

    return (
        <View style={{flex: 1}}>
            {!isCartEmpty &&
                <View style={{flex: 1}}>
                    <DetailedList DATA={state}/>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        backgroundColor: 'orange',
                        bottom: 10,
                        right: 15,
                        minWidth: 100,
                        minHeight: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }} onPress={handleConfirmationCart}>
                        <Text>Sepeti Onayla</Text>
                    </TouchableOpacity>
                </View>}
            {isCartEmpty &&
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Sepetinizde hiç ürün yok</Text>
                </View>
            }
        </View>
    );

}

export default CartScreen;