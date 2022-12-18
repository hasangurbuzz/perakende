import ActionType from "../model/ActionType";
import {addToCart, getTotalPriceOfCart, removeItemFromCart} from "../helper/CartHelper";


const cartReducer = (state, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            return addToCart(state, action.payload)
        }
        case ActionType.DELETE_FROM_CART:
            return removeItemFromCart(state, action.payload)
    }
}

export default cartReducer;