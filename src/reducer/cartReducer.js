import ActionType from "../model/ActionType";
import {addToCart, removeItemFromCart} from "../helper/CartHelper";


const cartReducer = (state, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            return addToCart(state, action.payload)
        }
        case ActionType.DELETE_FROM_CART:
            return removeItemFromCart(state, action.payload)
        case ActionType.DELETE_ALL_FROM_CART:
            return [];
    }
}

export default cartReducer;