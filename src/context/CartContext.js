import createDataContext from "./createDataContext";
import cartReducer from "../reducer/cartReducer";
import {getAllActions} from "../actions/CartActions";
import {useContext} from "react";

const {Context, Provider} = createDataContext(
    cartReducer,
    getAllActions,
    []
)

const useCart = () => useContext(Context);

export {useCart, Provider}
