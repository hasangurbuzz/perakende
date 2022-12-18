import ActionType from "../model/ActionType";

const productReducer = (state, action) => {
    switch (action.type) {
        case ActionType.ADD:
            return [
                ...state,
                action.payload
            ]
        case ActionType.UPDATE:
            return state.map(product => {
                return product.id === action.payload.id ? action.payload : product;
            })
        case ActionType.DELETE:
            return state.filter(
                (product) => product.id !== action.payload.id
            )
    }
}

export default productReducer;