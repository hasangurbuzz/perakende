import {Image, Text, useWindowDimensions, View} from "react-native";
import {useCart} from "../../context/CartContext";
import {CartItemEntity} from "../../model/CartItemEntity";
import {getProductQuantityInCart} from "../../helper/CartHelper";
import CustomButton from "./CustomButton";
import Styles from "../../styles/Styles";

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
        <View style={
            {
                ...Styles.ProductCardStyle.container,
                width: (useWindowDimensions().width - 60) / 3,
            }
        }>
            <Image style={Styles.ProductCardStyle.image}
                   source={{uri: item.image}}/>
            <Text style={Styles.ProductCardStyle.price}>{item.price} TL</Text>
            <Text style={Styles.ProductCardStyle.title}>{item.name}</Text>

            <View style={{flexDirection: 'row'}}>
                {
                    productQuantityInCart > 0 &&
                    <View style={Styles.ProductCardStyle.amount.container}>
                        <CustomButton onPressCallback={handleDeleteButton} title={'-'}/>
                        <Text style={Styles.ProductCardStyle.amount.title}>{productQuantityInCart}</Text>
                    </View>
                }
                <CustomButton onPressCallback={handleAddButton} title={'+'}/>
            </View>
        </View>
    )
}

export default ProductCard;