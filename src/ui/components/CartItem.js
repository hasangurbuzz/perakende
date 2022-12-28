import {Image, Text, View} from "react-native";
import React from "react";
import {useCart} from "../../context/CartContext";
import {CartItemEntity} from "../../model/CartItemEntity";
import Styles from "../../styles/Styles";
import CustomButton from "./CustomButton";

const CartItem = ({cartItem}) => {

    const {product, quantity} = cartItem;
    const {state, addProductToCart, deleteProductFromCart} = useCart();

    const handleAddButton = () => {
        addProductToCart(new CartItemEntity(product, 1))
        console.log(state.length)
    }

    const handleDeleteButton = () => {
        deleteProductFromCart(new CartItemEntity(product, 1))
    }

    return (
        <View style={Styles.CardItemStyle.container}>
            <Image style={Styles.CardItemStyle.image}
                   source={{uri: product.image}}/>
            <Text style={Styles.CardItemStyle.title}>{product.name}</Text>


            <View style={{flexDirection: 'row'}}>
                {
                    quantity > 0 &&
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <CustomButton title={'-'} onPressCallback={handleDeleteButton}/>

                        <Text style={Styles.CardItemStyle.quantity}>{quantity}</Text>
                    </View>
                }
                <CustomButton title={'+'} onPressCallback={handleAddButton}/>
            </View>
        </View>
    )
}

export default CartItem;