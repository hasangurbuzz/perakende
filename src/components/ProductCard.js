import {Button, Image, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {useCart} from "../context/CartContext";
import {CartItemEntity} from "../model/CartItemEntity";
import {getProductQuantityInCart} from "../helper/CartHelper";

const ProductCard = ({item}) => {

    const {state, addProductToCart, deleteProductFromCart} = useCart();

    const handleAddButton = () => {
        addProductToCart(
            new CartItemEntity(item, 1)
        )
    }

    const handleDeleteButton = () => {
        deleteProductFromCart(
            new CartItemEntity(item, 1)
        )
    }

    let productQuantityInCart = getProductQuantityInCart(state, item)


    return (
        <View style={{
            width: (useWindowDimensions().width - 60) / 3,
            alignItems: 'center',
            borderColor: 'orange',
            borderWidth: 1,
            margin: 10,
            borderRadius: 10,
            elevation: 10,
            shadowColor: 'black',
            backgroundColor: 'white'
        }}>
            <Image style={{width: 100, height: 100}}
                   source={{uri: item.image}}/>
            <Text>{item.price} TL</Text>
            <Text style={{
                flex: 1,
                flexWrap: 'wrap',
                textAlign: 'center'
            }}>{item.name}</Text>

            <View style={{flexDirection: 'row'}}>
                {
                    productQuantityInCart > 0 &&
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{
                            backgroundColor: 'orange',
                            width: 25,
                            height: 25,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                                          onPress={handleDeleteButton}>
                            <Text style={{fontSize: 19}}>-</Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 15,
                            paddingLeft: 5,
                            paddingRight: 5,
                            textAlign: 'center'
                        }}>{productQuantityInCart}</Text>
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

export default ProductCard;