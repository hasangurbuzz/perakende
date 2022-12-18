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

export const getAllActions = {addProductToCart, deleteProductFromCart}