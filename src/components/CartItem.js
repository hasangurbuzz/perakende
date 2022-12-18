import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useCart} from "../context/CartContext";
import {CartItemEntity} from "../model/CartItemEntity";

const CartItem = ({cartItem}) => {

    const {product, quantity} = cartItem;
    const {state, addProductToCart, deleteProductFromCart} = useCart();

    const handleAddButton = () => {
        addProductToCart(new CartItemEntity(product,1))
        console.log(state.length)
    }

    const handleDeleteButton = () => {
        deleteProductFromCart(new CartItemEntity(product, 1))
    }

    return (
        <View style={{
            flexDirection: 'row',
            borderColor: 'orange',
            borderWidth: 1,
            margin: 4,
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Image style={{width: 70, height: 70}}
                   source={{uri: product.image}}/>
            <Text style={{
                fontSize: 15,
                flex: 1,
                flexWrap: 'wrap',
                textAlign: 'center'
            }}>{product.name}</Text>


            <View style={{flexDirection: 'row'}}>
                {
                    quantity > 0 &&
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{
                            backgroundColor: 'orange',
                            width: 25,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} onPress={handleDeleteButton}>
                            <Text style={{fontSize: 19}}>-</Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 15,
                            paddingLeft: 5,
                            paddingRight: 5,
                            textAlign: 'center'
                        }}>{quantity}</Text>
                    </View>
                }
                <TouchableOpacity style={{
                    backgroundColor: 'orange',
                    width: 25,
                    height: 25,
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={handleAddButton}>
                    <Text style={{fontSize: 19}}>+</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default CartItem;