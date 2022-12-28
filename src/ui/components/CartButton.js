import {Text, TouchableOpacity} from "react-native";
import {useCart} from "../../context/CartContext";
import {getTotalPriceOfCart} from "../../helper/CartHelper";
import ScreenConstants from "../../constants/ScreenConstants";
import ButtonStyles from "../../styles/ButtonStyles";

const CartButton = ({navigation}) => {

    const {state} = useCart();
    let totalPrice = getTotalPriceOfCart(state);

    const navigateToCart = () => {
        if (navigation) {
            navigation.navigate(ScreenConstants.CartScreen.name)
        }
    }
    return (
        <TouchableOpacity style={ButtonStyles.CartButtonStyle} onPress={navigateToCart}>
            <Text>{totalPrice} TL</Text>
        </TouchableOpacity>
    )

}

export default CartButton;