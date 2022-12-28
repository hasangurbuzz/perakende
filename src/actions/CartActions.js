import ActionType from "../model/ActionType";

export const addProductToCart = (dispatch) => {
    return (cartItem) => {
        dispatch({type: ActionType.ADD_TO_CART, payload: cartItem})
    }
}

export const deleteProductFromCart = (dispatch) => {
    return (cartItem) => {
        dispatch({type: ActionType.DELETE_FROM_CART, payload: cartItem})
    }
}

export const deleteAllProductsFromCart = (dispatch) => {
    return () => {
        dispatch({type: ActionType.DELETE_ALL_FROM_CART})
    }
}

export const getAllActions = {addProductToCart, deleteProductFromCart, deleteAllProductsFromCart}