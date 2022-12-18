import ActionType from "../model/ActionType";

export const addProduct = (dispatch) => {
    return (product) => {
        dispatch({type: ActionType.ADD, payload: product})
    }
}

export const editProduct = (dispatch) => {
    return (product) => {
        dispatch({type: ActionType.UPDATE, payload: product})
    }
}

export const deleteProduct = (dispatch) => {
    return (product) => {
        dispatch({type: ActionType.DELETE, payload: product})
    }
}
export const getAllActions = {addProduct, editProduct, deleteProduct}